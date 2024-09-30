const points = matches => {
    let allPoints = 0;

    matches.forEach(match => {
        const [ourTeamScore , opponentsScore] = match.split(':').map(Number);
        if(ourTeamScore > opponentsScore){
            allPoints += 3;

        }else if(ourTeamScore === opponentsScore){
            allPoints += 1;
        }
    });

    return allPoints;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
