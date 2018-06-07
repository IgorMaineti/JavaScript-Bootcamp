// stunde score, total possible 
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const grade = function(studentScore, totalPossible) {
    

    if(typeof (studentScore && totalPossible) === 'number') {
        const studentGrade = (studentScore / totalPossible) * 100
        let letterGrade = ''

    if (studentGrade >= 90 ) {
       letterGrade = 'A'
    }
    else if(studentGrade >= 80) {
        letterGrade = 'B'
    }
    else if (studentGrade >= 70) {
        letterGrade = 'C'
    }
    else if (studentGrade >= 60) {
       letterGrade = 'D'    
    }
    else {
       letterGrade = 'F'
    } 
     console.log(`You got a ${letterGrade} (${studentGrade}%)!`)
} else {
    throw Error('Please provide numbers only')
}
    }

    
try {
    grade(19, true)
} catch (error) {
    console.log(error.message)   
}