

export const randomEmail = () => {
    return Math.random().toString().substring(2) + '@email.com';
    
}
console.log(randomEmail());
