// add scripts
(function letterGrader (score) {
  if(score > 96){
    return "A+";
  }else if (score > 92){
    return "A";
  } else if(score > 89){
    return "A-";
  } else if(score > 86){
    return "B+";
  }else if (score > 82){
    return "B";
  } else if(score > 79){
    return "B-";
  } else if(score > 76){
    return "C+";
  }else if (score > 72){
    return "C";
  } else if(score > 69){
    return "C-";
  } else if(score > 66){
    return "D+";
  }else if (score > 62){
    return "D";
  } else if(score > 59){
    return "D-";
  } else {
    return "F";
  }
})();

