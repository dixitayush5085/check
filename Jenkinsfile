pipeline {
 agent any
 stages {
    stage('input') {
      steps { sh 'npm install' }
      input {
        message "What is your first name?"
        ok "Submit"
        parameters {
          string(defaultValue: 'Dave', name: 'FIRST_NAME', trim: true) 
        }
      }
      options {
        timeout(time: 30, unit: 'SECONDS') 
      }
      steps {
        echo "Good Morning, $FIRST_NAME"
        sh '''
          hostname
          cat /etc/redhat-release
        '''
      }
    }
  }
}
