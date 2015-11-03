// add scripts
(function letterGrader (score) {
  if (score > 96) {
    return "A+";
  } else if (score > 92) {
    return "A";
  } else if (score > 89) {
    return "A-";
  } else if (score > 86) {
    return "B+";
  } else if (score > 82) {
    return "B";
  } else if (score > 79) {
    return "B-";
  } else if (score > 76) {
    return "C+";
  } else if (score > 72) {
    return "C";
  } else if (score > 69) {
    return "C-";
  } else if (score > 66) {
    return "D+";
  } else if (score > 62) {
    return "D";
  } else if (score > 59) {
    return "D-";
  } else {
    return "F";
  }
})();



(function averageScore (scoreArr){
  var total = 0;

  for (var i = 0; i < scoreArr.length; i++) {
    total += scoreArr[i];
  }

  return total/scoreArr.length;
})();



(function medianScore (scoreArr) {
  //sort array of numbers from lowest to highest
  var sortArr = scoreArr.sort(function(a,b) {
    return a-b;
  });
  //check to see if array length is even or odd
  if (sortArr.length  % 2 === 0) {
    //divide array into two even arrays
    var left = sortArray.splice(0,array.length/2);
    var right = sortArray;
    var middleAvg = (left[left.length-1]+right[0])/2;
    //return middle average
    return middleAvg;
  } else {
    //return middle
    return sortArr[Math.floor((sortArr.length -1)/ 2)];
  }
})();
