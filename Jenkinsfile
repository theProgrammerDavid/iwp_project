pipeline {
    agent any
    stages {
        stage('deploy') {
            steps {
		sh "which nodejs || (sudo apt update -y && sudo apt install nodejs -y)"
                sh "which npm || (sudo apt update -y && sudo apt install npm -y)"
		sh "npm i || echo 'Requirements already satisfied!'"
                sh "killall npm || echo 'No instances of npm were running!'"
                sh "npm start || echo 'The script could not be run or was ended abruptly!'"
            }
        }
    }
}
 
