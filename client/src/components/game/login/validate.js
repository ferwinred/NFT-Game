
export const users = [];



const hashCode = (a , b) => {

    return a.concat(b);

};

export const jwt = (pubAd, sign) => {

  if (!sign || !pubAd) {
    console.log("signature and Public Address are required");
    return;
  };

  const user = users.find(e => e.address === pubAd);

  if(!user){
    console.log("Doesn't exist user with that Public Address");
    return;
  };

  
  user.nonce += user.nonce;
  user.role = 'user';
  user.id = '1';

  const token = hashCode(pubAd, sign);

  return {token, role: user.role, user_id: user.id};
};


