// VARIABLE ; penampung data

/*
-rumus penulisan variable ==> keywordVariable namaVariable =data;
-keywordVariable ; var, let, const
-namavariable ;-harus diawali dengan huruf atau _atau $
               -jika terdiri dari dua suku kata atau lebih, maka tidak boleh dipisah dengan spasi.
data; tipe data yang ingin disimpan diantaranya string , number, boolean, undefined, array, object.
*/

//mendeklarasikan variable 
var namamurid;

//meng-inisialisasi variable 
var usiaMurid = 17;

//karakter tiap keyword variable 
//keyword var : redeclare, reassingn
//redeclare
var alamat = "jl. pemuda surabaya";
var alamat = "sukolilo surabaya" // membuat ulang variable yang sudah ada

//reassing 
alamat "rungkut surabaya";

//keyword let :non redeclare, reassing
let program = "web development"
//let program = "digital marketing"; // non-redeclare
program = "data science"; // reassing

// keyword const ; non-redeclare, non-reassing
const PI = 3.14;
const urldomain = "https://google.com";
