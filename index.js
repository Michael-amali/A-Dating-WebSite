var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'lady_at_ATM.jpg',
        age: 27        
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'lady_in_red.jpg',
        age: 20  
    },
    
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'guyOnLaptop.jpg',
        age: 21  
    },
    {
        name: 'Sandra',
        gender: 'F',
        hobby: 'shopping',
        avatar: 'lady_with_pen.jpg',
        age: 31
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'biz-man2.jpg',
        age: 33  
    },

    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'black_biz_woman.jpg',
        age: 37
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'biz-man-cofffe.jpg',
        age: 30
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        console.log(gender);

        //get minimum age
        var ageMinElement = document.getElementById('min-age');
        var minAge = ageMinElement.value;
        console.log(minAge);

        //get maximum age
        var ageMaxElement = document.getElementById('max-age');
        var maxAge = ageMaxElement.value;
        console.log(maxAge);
        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) { 
            //check gender
            if(gender == 'A' || gender == users[i].gender){

                //check hobby
                if(hobby == "" || hobby == users[i].hobby){

                    //check age
                    if((minAge == "" || users[i].age >= minAge) && (maxAge == "" ||  users[i].age <= maxAge)){
                        resultsHtml += '<div class="person-row">\
                        <img class="img-class" src="images/' + users[i].avatar + '" />\
                        <div class="person-info">\
                        <div>' +"Name: "+ users[i].name + '</div>\
                        <div>' +"Hobby: "+ users[i].hobby + '</div>\
                        <div>' +"Age: "+ users[i].age + '</div></div>\
                        <button class="add-button">Add as friend</button></div>';  
                    }
                }
            }           

        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});