pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t weathergpt:%BUILD_NUMBER% .'
            }
        }

        stage('Test Container') {
            steps {
                bat 'docker run -d --name weathergpt-test-%BUILD_NUMBER% -p 18080:80 weathergpt:%BUILD_NUMBER%'
                bat 'powershell -NoProfile -Command "Start-Sleep -Seconds 3; Invoke-WebRequest -UseBasicParsing http://localhost:18080 | Out-Null"'
            }
            post {
                always {
                    bat 'docker rm -f weathergpt-test-%BUILD_NUMBER% 2>NUL'
                }
            }
        }

        stage('Deploy Application') {
            steps {
                bat 'docker rm -f weathergpt 2>NUL'
                bat 'docker run -d --name weathergpt -p 8081:80 weathergpt:%BUILD_NUMBER%'
            }
        }
    }
}
