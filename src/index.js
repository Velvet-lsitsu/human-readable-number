module.exports = function toReadable (number) {
    let result  = ''; 
    const num = number;
    const strNumber = num.toString();
    const first = strNumber[0];
    const second = strNumber[1];
    const third = strNumber[2];

    if (number <= 19){
        switch(number){
            case 0:
                result = result + 'zero';
            break;
            case 1:
                result += 'one';
            break;
            case 2:
                result += 'two';
              break;
            case 3:
                result += 'three';
             break;
            case 4:
                result += 'four';
            break;
            case 5:
                result += 'five';
              break;
            case 6:
                 result += 'six';
            break;
            case 7:
                 result += 'seven';
            break;
            case 8:
                result += 'eight';
            break;
            case 9:
                result += 'nine';
            break;
            case 10:
                result += 'ten';
            break;
            case 11:
                result += 'eleven';
            break;
            case 12:
                result += 'twelve';
            break;
            case 13:
                result += 'thirteen';
            break;
            case 14:
                result += 'fourteen';
            break;
            case 15:
                result += 'fifteen';
            break;
            case 16:
                result += 'sixteen';
            break;
            case 17:
                result += 'seventeen';
            break;
            case 18:
                result += 'eighteen';
            break;
            case 19:
                result += 'nineteen';
            break;
            default: 
                return 'not a number between 0 and 19';
            }
        return result;
        }
    else if (number >= 20 && number <= 99){
        switch(first){
            case '2':
                result += 'twenty';
            break;
            case '3':
                result += 'thirty';
            break;
            case '4':
                result += 'forty';
            break;
            case '5':
                result += 'fifty';
            break;
            case '6':
                result += 'sixty';
            break;
            case '7':
                result += 'seventy';
            break;
            case '8':
                result += 'eighty';
            break;
            case '9':
                result += 'ninety';
            break;
            default: 
                return 'not a number between 10 and 90';
        }   
        switch(second){
            case '0':
            break;
            case '1':
                result +=' one';
            break;
            case '2':
                result +=' two';
            break;
            case '3':
                result +=' three';
            break;
            case '4':
                result +=' four';
            break;
            case '5':
                result +=' five';
            break;
            case '6':
                result +=' six';
            break;
            case '7':
                result +=' seven';
            break;
            case '8':
                result +=' eight';
            break;
            case '9':
                result += ' nine';
            break;
            default: 
                return 'not a number between 11 and 99';
        }   
        return result;
    }
    else if (number >= 100 && number <= 999){
        switch(first){
            case '0':
            break;
            case '1':
                result +='one';
            break;
            case '2':
                result +='two';
            break;
            case '3':
                result +='three';
            break;
            case '4':
                result +='four';
            break;
            case '5':
                result +='five';
            break;
            case '6':
                result +='six';
            break;
            case '7':
                result +='seven';
            break;
            case '8':
                result +='eight';
            break;
            case '9':
                result += 'nine';
            break;
            default: 
                return first;
        }
        result += ' hundred'
        
        if (second === '0'){
            switch(strNumber.slice(-1)){
            case '0':
            break;
            case '1':
                result += ' one';
            break;
            case '2':
                result += ' two';
              break;
            case '3':
                result += ' three';
             break;
            case '4':
                result += ' four';
            break;
            case '5':
                result += ' five';
              break;
            case '6':
                 result += ' six';
            break;
            case '7':
                 result += ' seven';
            break;
            case '8':
                result += ' eight';
            break;
            case '9':
                result += ' nine';
            break;
            default: 
                return second;
            }
        }
        else if (second === '1'){
           switch(strNumber.slice(-2)){
            case '10':
                result += ' ten';
            break;
            case '11':
                result += ' eleven';
            break;
            case '12':
                result += ' twelve';
            break;
            case '13':
                result += ' thirteen';
            break;
            case '14':
                result += ' fourteen';
            break;
            case '15':
                result += ' fifteen';
            break;
            case '16':
                result += ' sixteen';
            break;
            case '17':
                result += ' seventeen';
            break;
            case '18':
                result += ' eighteen';
            break;
            case '19':
                result += ' nineteen';
            break;
            default: 
                return 'sorry';
           }
        }
        else {
            switch(second){
            case '2':
                result += ' twenty';
            break;
            case '3':
                result += ' thirty';
            break;
            case '4':
                result += ' forty';
            break;
            case '5':
                result += ' fifty';
            break;
            case '6':
                result += ' sixty';
            break;
            case '7':
                result += ' seventy';
            break;
            case '8':
                result += ' eighty';
            break;
            case '9':
                result += ' ninety';
            break;
            default: 
                return 'not a number between 10 and 90';
        }   
        switch(third){
            case '0':
            break;
            case '1':
                result +=' one';
            break;
            case '2':
                result +=' two';
            break;
            case '3':
                result +=' three';
            break;
            case '4':
                result +=' four';
            break;
            case '5':
                result +=' five';
            break;
            case '6':
                result +=' six';
            break;
            case '7':
                result +=' seven';
            break;
            case '8':
                result +=' eight';
            break;
            case '9':
                result += ' nine';
            break;
            default: 
                return 'sorry again';
        }       
        }
    }
    return result;
}