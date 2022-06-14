let numData = prompt('Enter number');
switch (true) {
  case numData > 0:
    console.log('Number is positive');
    break;
  case numData == 0:
    console.log('Numbers is zero');
    break;
  case numData < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}