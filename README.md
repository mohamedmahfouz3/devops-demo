# devops-demo

Small Next.js app used to practice a full DevOps flow: CI, Docker, Kubernetes.

## Run locally with Docker

    docker build -t devops-demo:v1 .
    docker run --rm -p 3000:3000 devops-demo:v1
    curl -i http://localhost:3000/api/health

## Deploy on a local cluster (kind)

    kind create cluster --name demo --config k8s/kind-config.yaml
    kind load docker-image devops-demo:v1 --name demo
    kubectl apply -f k8s/
    kubectl get pods -w
    curl -i http://localhost:8080/api/health

## Rollback practice

    # build a second version, load it, then:
    kubectl set image deployment/web web=devops-demo:v2
    kubectl rollout status deployment/web
    kubectl rollout undo deployment/web

## Decisions

- Multi-stage build with a non-root user: smaller image, smaller attack surface.
- Image tagged with the commit SHA, never `latest`: every deploy is traceable.
- maxUnavailable 0 plus readiness probe: no downtime during rolling updates.
- Pipeline permissions set to the minimum each job needs.
# devops-demo
