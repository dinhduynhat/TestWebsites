//Site Pixel HEAD Script For:eonline.com
//Krux Interchange - Krux Writes to Cookie UPDATED:2012-08-30 08:48:31
document.write(unescape('%3Cscript%3Ewindow.Krux%7C%7C%28%28Krux%3Dfunction%28%29%7BKrux.q.push%28arguments%29%3B%7D%29.q%3D%5B%5D%29%3B%28function%28%29%7Bfunction%20retrieve%28n%29%7Bvar%20m%2C%20k%3D%27kx%27%2Bn%3Bif%20%28window.localStorage%29%20%7Breturn%20window.localStorage%5Bk%5D%20%7C%7C%20%22%22%3B%7D%20else%20if%20%28navigator.cookieEnabled%29%20%7Bm%20%3D%20document.cookie.match%28k%2B%27%3D%28%5B%5E%3B%5D%2A%29%27%29%3Breturn%20%28m%20%26%26%20unescape%28m%5B1%5D%29%29%20%7C%7C%20%22%22%3B%7D%20else%20%7Breturn%20%27%27%3B%7D%7Dvar%20kvs%20%3D%20%5B%5D%3BKrux.user%20%3D%20retrieve%28%27user%27%29%3Bif%20%28Krux.user%29%20%7Bkvs.push%28%27u%3D%27%20%2B%20Krux.user%29%3B%7DKrux.segments%20%3D%20retrieve%28%27segs%27%29%20%26%26%20retrieve%28%27segs%27%29.split%28%27%2C%27%29%20%7C%7C%5B%5D%3Bfor%20%28var%20i%20%3D%200%3B%20i%20%3C%20Krux.segments.length%3B%20i%2B%2B%20%29%20%7Bkvs.push%28%27ksg%3D%27%20%2B%20Krux.segments%5Bi%5D%29%3B%7DKrux.dartKeyValues%20%3D%20kvs.length%20%3F%20kvs.join%28%27%3B%27%29%20%2B%20%27%3B%27%3A%20%27%27%3B%7D%29%28%29%3B%3C%2Fscript%3E'));
//Legacy DFP: Krux Interchange - Krux KVs Written to AdTag UPDATED:2013-07-02 11:30:57
document.write(unescape('%3Cscript%3E%28function%28%29%7Bvar%20kvs%20%3D%20window.Krux%20%3F%20window.Krux.dartKeyValues%20%3A%20%27%27%3Bif%28top.__nbcudigitaladops_inject%20%26%26%20top.__nbcudigitaladops_inject.dtprm%29%7Btop.__nbcudigitaladops_inject.dtprm%28kvs%29%3B%7D%7D%29%28%29%3B%3C%2Fscript%3E'));
//Default Pixel - Header (Do Not Delete) UPDATED:2012-02-28 13:35:47
document.write(unescape('%3Cscript%3E%3C%2Fscript%3E'));
