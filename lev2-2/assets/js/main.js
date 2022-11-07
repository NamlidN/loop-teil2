
function asdf() {
  let oA = [];
  input = document.getElementById('A').value;
  for (let i = 0; i <= input; i++) {
    if (i == 0) {
      continue;
    }
    oA.push('o');
  }
  let oAnew = oA.join('');
  oAnew.toString(); //??????????????????
  document.getElementById('out').innerHTML = `l${oAnew}p`;
}
