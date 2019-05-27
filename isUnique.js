const isUnique=(s)=>{
  let hash = {};

  if(s.length < 0) return false;

  for(let i=0; i<s.length; i++){
    let c = s[i];

    if(hash[c]){
      return false
    }else{
      hash[c]=true;
    }
  }
  return true
}

isUnique('ssad');
