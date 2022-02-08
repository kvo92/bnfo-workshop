// https://www.rcsb.org/structure/7T9J
OMICRON_SPIKE_SEQ = "MFVFLVLLPLVSSQCVNLTTRTQLPPA"

// IRL we have to run sequence alignment before doing coparison, but for the 
// sake of this tutorial we will pretend that we did do that
TEST_DATA = [
  "MFVFLVLLPCVNLTTRTQLPPAYTNLVSSQSFTR",
  "MFVFLVLL__VSSQCVNLTT__QLPPAEMFSFTR",
  "MFVFLVLLPAAASQCVNLTTRTQLPPAYTNFSDR",
  "MFVFLV+LPLVSSQCVNLTTR_QLPAAYTNSFTR",
  "MFVFLVLLPLVLPPAYTNSSQCVNLTTRTQSFTR"
]
var compareBtn = document.getElementById("compare-btn");
var userSeq = document.getElementById("user-seq");
var resultBox = document.getElementById('result');
var pResultBox = document.getElementById('p-result');

function handleCompareBtnClick (){
  var Seq = userSeq.value;
  result = analysize(Seq);
  resultBox.innerHTML = result;
}

function analysize(Seq){
  // step 1 : sequence alignment
  console.log("pretending we are doing seq alignment");
  // step 2 : highlight the different
  var count = 0;
  var result = "";
  for (let i in OMICRON_SPIKE_SEQ) {
    if (OMICRON_SPIKE_SEQ[i] == Seq[i]){
      result += Seq[i];
    }else {
      result += `<mark style="background-color: #ffff00;">${Seq[i]}</mark>`;
      count += 1;
    }
  }

  // step 3 : pass the different to p-distance function
  calculatePDistance(count, Seq.length);

  return result;
}

function calculatePDistance(diffCount, length){
  var pdistance = diffCount/length;
  pResultBox.innerHTML = pdistance;
}

function init() {
  compareBtn.addEventListener('click', handleCompareBtnClick )
}

init();