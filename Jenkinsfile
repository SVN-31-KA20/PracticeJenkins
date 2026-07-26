pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Git Pull') {
            steps {
                echo 'Project folder informatioin is fetched'
            }
        }
        stage('Build') {
            steps {
                echo 'Project build completed'
            }
        }
        stage('Tets') {
            steps {
                echo 'Unit test cases are completed'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Project is deployed'
            }
        }
    }
}
