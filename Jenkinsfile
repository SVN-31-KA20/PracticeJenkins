pipeline {
    agent any

    environment {
        CI = 'true'
        IMAGE_NAME = 'practice-react-app'
        CONTAINER_NAME = 'practice-react-container'
        HOST_PORT = '3000'
        CONTAINER_PORT = '80'
    }

    stages {
        stage('Docker Check') {
            steps {
                echo 'Checking Docker installation...'
                bat 'docker --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building React application Docker image...'
                bat "docker build -t ${env.IMAGE_NAME}:latest ."
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Stopping existing container if running...'
                bat "docker rm -f ${env.CONTAINER_NAME} 2>nul || exit /b 0"
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Starting React application...'
                bat "docker run -d --name ${env.CONTAINER_NAME} -p ${env.HOST_PORT}:${env.CONTAINER_PORT} ${env.IMAGE_NAME}:latest"
            }
        }

        stage('Verify Container') {
            steps {
                echo 'Checking running Docker containers...'
                bat 'docker ps'
            }
        }
    }

    post {
        success {
            echo 'React application deployed successfully!'
            echo 'Application URL: http://localhost:3000'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }

        always {
            echo 'Pipeline execution completed.'
        }
    }
}
