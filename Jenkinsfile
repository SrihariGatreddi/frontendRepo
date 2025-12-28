pipeline {
    agent any

    environment {
        APP_HOST    = "44.204.223.75"          // Target EC2 IP (private/public)
        SSH_USER   = "ubuntu"
        SSH_CRED   = "ec2-ssh-key"         // Jenkins credential ID
    }

    stages {

        stage("Checkout Code") {
            steps {
                git branch: 'main',
                    url: 'https://github.com/SrihariGatreddi/frontendRepo.git'
            }
        }


        stage("Deploy to EC2") {
            steps {
                sshagent([SSH_CRED]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${SSH_USER}@${APP_HOST} '
                            echo "Deploying application on EC2..."
                        '
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Build and deployment completed successfully"
        }
        failure {
            echo "❌ Pipeline failed"

            echo "Collecting logs for debugging..."
        }
    }
}