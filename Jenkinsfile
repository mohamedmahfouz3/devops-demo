pipeline{
    agent any
    
    tools {
    nodejs 'NodeJS-20'
}
    options {
        timestamps()
        disableConcurrentBuilds()
    }
    stages{
        stage("Checkout"){
            steps{
                checkout scm
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========Checkout executed successfully========"
                }
                failure{
                    echo "========Checkout executed failed========"
                }
            }
        }
         stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Type Check') {
            steps {
                sh 'npm run typecheck'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            echo '======== Pipeline finished ========'
        }

        success {
            echo '======== Pipeline executed successfully ========'
        }

        failure {
            echo '======== Pipeline execution failed ========'
        }
    }
}
   