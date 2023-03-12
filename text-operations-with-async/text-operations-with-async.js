$(document).ready(function(){
    var deferred = $.Deferred(); // Deferred nesnesi oluşturuluyor
    
    $("button").click(function(){
        $("p").fadeToggle().promise().done(function(){
            deferred.resolve(); // İşlem tamamlandı, promise durumunu "başarılı" olarak ayarla
        });
    });

    deferred.done(function(){
        alert("Fade işlemi tamamlandı!"); // Promise durumu başarılı olduğunda çalışacak kod
    });

    $("button.off").click(function(){
        $("button").off(); // Buton click event'ı kaldırılıyor
    });

    $("button.die").click(function(){
        $("p").die(); // Tüm p elementlerindeki event'lar kaldırılıyor
    });

    $("button.even").click(function(){
        $("p:even").css("background-color", "lightgray"); // Çift sıradaki p elementlerinin arkaplan rengi değiştiriliyor
    });

    $("p").click(function(){
        alert("P elementine tıklandı!"); // P elementine tıklandığında çalışacak kod
    });
});