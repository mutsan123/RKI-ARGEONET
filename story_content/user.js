function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63AdI3tPf46":
        Script1();
        break;
      case "61PjNJ1zzrH":
        Script2();
        break;
      case "5jIUifWlJAY":
        Script3();
        break;
      case "5qQSbAMGwpj":
        Script4();
        break;
      case "6PZGnbY4WWa":
        Script5();
        break;
      case "6nWGZc4cr3c":
        Script6();
        break;
      case "64uRveBZstx":
        Script7();
        break;
      case "5vkfZvEYcDq":
        Script8();
        break;
      case "6qEdzvUrEG6":
        Script9();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0;
}

function Script2()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script3()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0;
}

function Script4()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script5()
{
  var player = GetPlayer();


var nama = player.GetVar("TextEntry");

var kelas = player.GetVar("TextEntry1");


var j1 = player.GetVar("TextEntry36");
var j2 = player.GetVar("TextEntry37");
var j3 = player.GetVar("TextEntry38");
var j4 = player.GetVar("TextEntry39");
var j5 = player.GetVar("TextEntry40");
var j6 = player.GetVar("TextEntry43");
var j7 = player.GetVar("TextEntry41");
var j8 = player.GetVar("TextEntry42");
var j9 = player.GetVar("TextEntry28");
var j10 = player.GetVar("TextEntry29");
var j11 = player.GetVar("TextEntry30");
var j12 = player.GetVar("TextEntry31");
var j13 = player.GetVar("TextEntry32");
var j14 = player.GetVar("TextEntry33");
var j15 = player.GetVar("TextEntry34");
var j16 = player.GetVar("TextEntry35");
var j17 = player.GetVar("TextEntry4");
var j18 = player.GetVar("TextEntry5");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";

isiFile += "Kegiatan 2"+"\n";


isiFile += "Gambar yang bukan merupakan jaring-jaring kubus adalah Gambar ke-";

isiFile += j1 + "\n";

isiFile += "Bagaimana cara kamu menentukan bahwa jaring-jaring pada gambar tersebut tidak dapat membentuk bangun ruang kubus?";

isiFile += "Jawab:"+j2 + "\n\n";

isiFile += "Gambar yang bukan merupakan jaring-jaring balok adalah Gambar ke-";

isiFile += j3 + "\n";

isiFile += "Bagaimana cara kamu menentukan bahwa jaring-jaring pada gambar tersebut tidak dapat membentuk bangun ruang balok?";

isiFile += "Jawab:"+j4 + "\n\n";

isiFile += "Gambar yang bukan merupakan jaring-jaring limas adalah Gambar ke-";

isiFile += j5 + "\n";

isiFile += "Bagaimana cara kamu menentukan bahwa jaring-jaring pada gambar tersebut tidak dapat membentuk bangun ruang limas?";

isiFile += "Jawab:"+j6 + "\n\n";

isiFile += "Gambar yang bukan merupakan jaring-jaring prisma adalah Gambar ke-";

isiFile += j7 + "\n";

isiFile += "Bagaimana cara kamu menentukan bahwa jaring-jaring pada gambar tersebut tidak dapat membentuk bangun ruang prisma?";

isiFile += "Jawab:"+j8 + "\n\n";

isiFile += "Kegiatan 3"+"\n\n";

isiFile += "Ciri jaring-jaring kubus:";

isiFile += j9 + "\n\n";

isiFile += "Ciri jaring-jaring balok:";

isiFile += j10 + "\n\n";

isiFile += "Ciri jaring-jaring limas segiempat:";

isiFile += j11 + "\n\n";

isiFile += "Ciri jaring-jaring limas segitiga:";

isiFile += j12 + "\n\n";

isiFile += "Ciri jaring-jaring prisma segiempat:";

isiFile += j13 + "\n\n";

isiFile += "Ciri jaring-jaring prisma segitiga:";

isiFile += j14 + "\n\n";

isiFile += "Diskusikan bersama kelompokmu, bagaimana langkah-langkah kalian dalam menentukan bahwa jaring-jaring membentuk suatu bangun ruang?";

isiFile += "Jawab:"+ j15 + "\n\n";

isiFile += "Jika sisi yang berposisi sebagai alas diubah, apakah bangun ruang yang terbentuk akan tetap sama? Coba jelaskan!";

isiFile += "Jawab:"+ j16 + "\n\n";

isiFile += "Kegiatan 5"+"\n";

isiFile += "Evaluasi kebenaran kawabanmu dan berikan alasannya!";

isiFile += "Jawab:"+ j17 + "\n\n";

isiFile += "Buatlah kesimpulan mengenai materi yang telah dipelajari dengan bahasamu sendiri!";

isiFile += "Jawab:"+ j18 + "\n\n";

var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script6()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0;
}

function Script7()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script8()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0;
}

function Script9()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

