(function(d){	const l = d['pl'] = d['pl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Block quote":"Cytat blokowy",Bold:"Pogrubienie","Bulleted List":"Lista wypunktowana",Cancel:"Anuluj","Centered image":"Obraz wyrównany do środka","Change image text alternative":"Zmień tekst zastępczy obrazka","Character categories":"Kategorie znaków","Choose heading":"Wybierz nagłówek",Column:"Kolumna","Copyright sign":"","Decrease indent":"Zmniejsz wcięcie","Delete column":"Usuń kolumnę","Delete row":"Usuń wiersz","Double dagger":"","Double exclamation mark":"","Double low-9 quotation mark":"","Double question mark":"",Downloadable:"Do pobrania","Dropdown toolbar":"Rozwijany pasek narzędzi","Edit link":"Edytuj odnośnik","Editor toolbar":"Pasek narzędzi edytora","Enter image caption":"Wstaw tytuł obrazka","Exclamation question mark":"","Full size image":"Obraz w pełnym rozmiarze","Header column":"Kolumna nagłówka","Header row":"Wiersz nagłówka",Heading:"Nagłówek","Heading 1":"Nagłówek 1","Heading 2":"Nagłówek 2","Heading 3":"Nagłówek 3","Heading 4":"Nagłówek 4","Heading 5":"Nagłówek 5","Heading 6":"Nagłówek 6","Horizontal ellipsis":"","Image toolbar":"Pasek narzędzi obrazka","image widget":"Obraz","Increase indent":"Zwiększ wcięcie","Insert column left":"Wstaw kolumnę z lewej","Insert column right":"Wstaw kolumnę z prawej","Insert image":"Wstaw obraz","Insert media":"Wstaw media","Insert row above":"Wstaw wiersz ponad","Insert row below":"Wstaw wiersz poniżej","Insert table":"Wstaw tabelę","Inverted exclamation mark":"","Inverted question mark":"",Italic:"Kursywa","Left aligned image":"Obraz wyrównany do lewej","Left double quotation mark":"","Left single quotation mark":"","Left-pointing double angle quotation mark":"",Link:"Wstaw odnośnik","Link URL":"Adres URL","Media URL":"Adres URL","media widget":"widget osadzenia mediów","Merge cell down":"Scal komórkę w dół","Merge cell left":"Scal komórkę w lewo","Merge cell right":"Scal komórkę w prawo","Merge cell up":"Scal komórkę w górę","Merge cells":"Scal komórki",Next:"Następny","Numbered List":"Lista numerowana","Open in a new tab":"Otwórz w nowej zakładce","Open link in new tab":"Otwórz odnośnik w nowym oknie",Paragraph:"Akapit","Paragraph sign":"","Paste the media URL in the input.":"Wklej adres URL mediów do pola.","Per mille sign":"","Per ten thousand sign":"",Previous:"Poprzedni","Question exclamation mark":"",Redo:"Ponów","Registered sign":"","Reversed paragraph sign":"","Rich Text Editor":"Edytor tekstu sformatowanego","Rich Text Editor, %0":"Edytor tekstu sformatowanego, %0","Right aligned image":"Obraz wyrównany do prawej","Right double quotation mark":"","Right single quotation mark":"","Right-pointing double angle quotation mark":"",Row:"Wiersz",Save:"Zapisz","Section sign":"","Select column":"","Select row":"","Show more items":"Pokaż więcej","Side image":"Obraz dosunięty do brzegu, oblewany tekstem","Single left-pointing angle quotation mark":"","Single low-9 quotation mark":"","Single right-pointing angle quotation mark":"","Special characters":"Znaki specjalne","Split cell horizontally":"Podziel komórkę poziomo","Split cell vertically":"Podziel komórkę pionowo","Table toolbar":"Pasek narzędzi tabel","Text alternative":"Tekst zastępczy obrazka","The URL must not be empty.":"Adres URL nie może być pusty.","This link has no URL":"Nie podano adresu URL odnośnika","This media URL is not supported.":"Ten rodzaj adresu URL nie jest obsługiwany.","Tip: Paste the URL into the content to embed faster.":"Wskazówka: Wklej URL do treści edytora, by łatwiej osadzić media.","Trade mark sign":"","Two dot leader":"",Undo:"Cofnij",Unlink:"Usuń odnośnik","Upload failed":"Przesyłanie obrazu nie powiodło się","Upload in progress":"Trwa przesyłanie","Widget toolbar":"Pasek widgetów"}	);l.getPluralForm=function(n){return (n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));