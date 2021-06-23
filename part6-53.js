var person = {
  name: 'Maxim',
  age: 18,
  job: 'Frontend',
  displayInfo: function(ms) {

    console.log(this)
    
    setTimeout(function() {
      console.log('Name:', this.name)
      console.log('Age:', this.age)
      console.log('Job:', this.job)
    }.bind(this), ms)

  }
}

person.displayInfo(2000)