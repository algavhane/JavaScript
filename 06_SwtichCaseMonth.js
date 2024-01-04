

function monthOfYear(month){
    switch (month) {
        case 1:
            console.log(`Month Number ${month}==> Jan`);
            break;
            case 2:
            console.log(`Month Number ${month}==> Fub`);
            break;
            case 3:
            console.log(`Month Number ${month}==> March`);
            break;
            case 4:
            console.log(`Month Number ${month}==> April`);
            break;
            case 5:
            console.log(`Month Number ${month}==> May`);
            break;
            case 6:
            console.log(`Month Number ${month}==> Jun`);
            break;
            case 7:
            console.log(`Month Number ${month}==> July`);
            break;
            case 8:
            console.log(`Month Number ${month}==> Aug`);
            break;
            case 9:
            console.log(`Month Number ${month}==> Sep`);
            break;
            case 10:
            console.log(`Month Number ${month}==> Oct`);
            break;
            case 11:
            console.log(`Month Number ${month}==> Nov`);
            break;
            case 12:
            console.log(`Month Number ${month}==> Dec`);
            break;
        default:
            console.log(`Invalid input==>${month}`);
            break;
    }

}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
