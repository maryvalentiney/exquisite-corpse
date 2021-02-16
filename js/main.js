var n=0;

function next_or_back(num)
{
    if (num==-1 && n!=0){
      n-=1;
    }
    else{
      n+=1;
    }

console.log(n);

    switch (n) {
      case 0:
          document.getElementById("first").style.display = "block";
          document.getElementById("second").style.display = "none";
          document.getElementById("third").style.display = "none";
          document.getElementById("fourth").style.display = "none";
        break;
        case 1:
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("third").style.display = "none";
        document.getElementById("fourth").style.display = "none";
          break;
          case 2:
          document.getElementById("first").style.display = "none";
          document.getElementById("second").style.display = "none";
          document.getElementById("third").style.display = "block";
          document.getElementById("fourth").style.display = "none";
            break;
            case 3:
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "none";
            document.getElementById("fourth").style.display = "block";
              break;
      default:

    }
}
