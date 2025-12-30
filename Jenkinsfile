pipeline {
    agent any

    environment {
        APP_HOST    = "3.237.233.61"          // Target EC2 IP (private/public)
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
                                 echo "Copying frontend files..."
                                 rsync -avz --delete public/ ${SSH_USER}@${APP_HOST}:/tmp/frontend-build/

                                 echo "Copying deployment script..."
                                 rsync -avz deploy-frontend.sh ${SSH_USER}@${APP_HOST}:/tmp/frontend-build/deploy-frontend.sh

                                 echo "Executing deployment script..."
                                 ssh ${SSH_USER}@${APP_HOST} '
                                   chmod +x /tmp/frontend-build/deploy-frontend.sh &&
                                   /tmp/frontend-build/deploy-frontend.sh
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