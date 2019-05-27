let checkPerm = (s1, s2)=>{
  if(s1.length !== s2.length){
    return false
  }

  let hash = {};

  for(let i=0; i<s1.length; i++){
    let curr = s1[i];

    if(hash[curr]){
      hash[curr]++
    }else {
      hash[curr] = 1;
    }
  }

  for(let i=0; i<s2.length; i++){
      let curr = s2[i];
      if(hash[curr] && hash[curr] !== 0){
        hash[curr]--
      }else{
        return false;
      }
  } return true;

  
}

checkPerm('imran', 'namri')
