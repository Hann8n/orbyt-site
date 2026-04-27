Bu Gizlilik Politikası, Orbyt'ın ("biz", "bize", "bizim") mobil uygulamamızı ("Orbyt" veya "Uygulama") kullandığınızda bilgileri nasıl topladığını, kullandığını ve paylaştığını açıklamaktadır. Uygulama aracılığıyla doğrudan topladığımız kişisel veriler için veri sorumlusuyuz.

**AT Protocol Bildirimi:** Orbyt, AT Protocol aracılığıyla Bluesky ağına bağlanan bir üçüncü taraf istemcidir. Orbyt'ta gönderi paylaştığınızda veya etkileşimde bulunduğunuzda, bu etkinlik merkezi olmayan AT Protocol ağında gerçekleşir. Verilerinizin bu ağda nasıl işlendiğini anlamak için [Bluesky'nin Gizlilik Politikasını](https://bsky.social/about/support/privacy-policy) da incelemenizi öneririz.

## Kısa Versiyon

- Uygulamayı çalıştırmak için yalnızca gerekli olanı topluyoruz — Bluesky profil bilgileriniz, birkaç sunucu tarafı tercih ve standart ağ günlükleri.
- Kişisel bilgilerinizi satmıyoruz.
- Verilerinizi yapay zeka veya makine öğrenimi modeli eğitimi için kullanmıyoruz.
- Üçüncü taraf reklam SDK'ları kullanmıyoruz. Sentry'yi yalnızca çökme ve hata izleme için kullanıyoruz.
- AT Protocol'de paylaştığınız içeriklerin çoğu tasarımı gereği herkese açıktır — buna göre hareket edin.
- Dilediğiniz zaman [bizimle iletişime geçerek](/contact) verilerinize erişim, düzeltme, silme veya kopyasını talep edebilirsiniz.

## Topladığımız Bilgiler

### Bluesky'den Alınan Bilgiler

Bluesky hesabınızla Orbyt'a giriş yaptığınızda, Bluesky profilinizden aşağıdaki bilgilere erişiriz:

- **DID (Merkezi Olmayan Tanımlayıcı)**: AT Protocol'deki benzersiz tanımlayıcınız
- **Handle**: Kullanıcı adınız (ör. @kullaniciad.bsky.social)
- **Görünen Ad**: Profilinizde görünen isim
- **Avatar**: Profil resminiz

Kimlik doğrulama için Bluesky'nin OAuth sistemini kullanırız. Orbyt, Bluesky şifrenizi saklamaz.

### Sunucularımızda Saklanan Bilgiler

Orbyt'a özgü özellikleri sunmak için sunucularımızda minimum düzeyde veri tutarız:

- **Profil Renkleri**: Uygulamada belirlediğiniz özel metin ve arka plan renkleri
- **Katılım Tarihi**: Orbyt'ı ilk kullandığınız tarih
- **Beta Durumu**: Orbyt'ın erken kullanıcısı olup olmadığınız

Bu veriler, AT Protocol'deki `com.getorbyt.profile` kaydınızdan dizinlenir ve kasıtlı olarak minimumda tutulur.

### Cihazınızda Yerel Olarak Saklanan Bilgiler

Aşağıdaki bilgiler yalnızca cihazınızda saklanır ve sunucularımıza hiçbir zaman gönderilmez:

- **Hesap Bilgileri**: Hızlı geçiş için kaydedilmiş Bluesky hesaplarınız
- **OAuth Token'ları**: Güvenli kimlik doğrulama token'ları (cihazın güvenli depolama alanında saklanır)
- **Abone Olunan Kanallar**: Abone olduğunuz akışlar ve kanallar
- **İzleme Geçmişi**: İzlediğiniz videolar ("Karışımınız" akışını filtrelemek için kullanılır, tamamen cihazda işlenir)
- **Uygulama Tercihleri**: Ayarlarınız ve arayüz tercihleriniz

### AT Protocol Ağıyla Paylaşılan Bilgiler

AT Protocol, kullanıcı etkinliğinin büyük çoğunluğunun tasarımı gereği herkese açık olduğu merkezi olmayan bir sosyal ağ protokolüdür. Orbyt'ı kullandığınızda, aşağıdaki bilgiler AT Protocol ağıyla (Bluesky ve diğer üçüncü taraf hizmetler dahil) paylaşılır ve burada saklanır:

- **Genel İçerik**: Gönderileriniz, profil bilgileriniz, görünen adınız, avatarınız, biyografiniz, beğenileriniz, takiplerıniz, engellemeleriniz ve diğer sosyal etkileşimler AT Protocol ağındaki herkes tarafından görülebilir.
- **Orbyt Profil Verileri**: Profil renkleriniz ve abone olunan kanallarınız, AT Protocol'deki `com.getorbyt.profile` kaydınızda saklanır.

Bu veriler yalnızca Orbyt tarafından değil; Bluesky Social, PBC dahil olmak üzere AT Protocol ağının ve operatörlerinin politikalarına göre yönetilir.

### Otomatik Olarak Toplanan Bilgiler

Orbyt'ı kullandığınızda otomatik olarak toplayabileceğimiz bilgiler:

- **Cihaz Bilgileri**: Cihaz türü, işletim sistemi ve uygulama sürümü
- **IP Adresi**: API'mize yapılan standart ağ istekleri aracılığıyla toplanır; normal sunucu günlük döngüsünün ötesinde saklanmaz

### Hata İzleme

Orbyt uygulaması, çökmeleri ve hataları tespit etmek ve teşhis etmek için hata izleme servisi olan **Sentry**'yi kullanmaktadır. Bir hata oluştuğunda, Sentry şunları toplayabilir:

- **Hata detayları**: Yığın izleri ve hata mesajları
- **Cihaz bilgileri**: Cihaz türü, işletim sistemi sürümü ve uygulama sürümü
- **Breadcrumb'lar**: Hatadan önceki son uygulama eylemlerinin sınırlı kaydı

Bu veriler yalnızca hataları tespit etmek ve düzeltmek amacıyla kullanılır — reklam veya davranışsal profilleme için değil. Sentry, Inc. tarafından kendi [Gizlilik Politikası](https://sentry.io/privacy/) kapsamında işlenmektedir.

### Web Sitesi Analitiği

Web sitemiz (getorbyt.com), gizliliği koruyan bir analitik hizmeti olan **Cloudflare Web Analytics**'i kullanmaktadır. Bu hizmet:

- Çerez kullanmaz
- Bireysel kullanıcıları siteler arasında takip etmez
- Kişisel bilgi toplamaz
- Yalnızca sayfa görüntülemeleri ve performans hakkında toplu, anonimleştirilmiş veriler toplar

Cloudflare'in gizlilik uygulamaları hakkında daha fazla bilgiyi [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/) adresinde bulabilirsiniz.

**Orbyt mobil uygulaması herhangi bir üçüncü taraf reklam SDK'sı içermemektedir. Sentry'yi yalnızca hata izleme için kullanıyoruz.**

## Bilgilerinizi Nasıl Kullanırız

Bilgilerinizi şu amaçlarla işleriz:

- Orbyt uygulamasını sağlamak ve çalıştırmak (*sözleşmenin ifası*)
- Bluesky hesabınızla giriş yapmanızı sağlamak (*sözleşmenin ifası*)
- Profil renklerinizi ve özelleştirmelerinizi görüntülemek (*sözleşmenin ifası*)
- Aboneliklerinize göre kişiselleştirilmiş akış içeriği göstermek (*sözleşmenin ifası*)
- "Karışımınız" akışını izleme geçmişine göre filtrelemek, cihazınızda yerel olarak işlenir (*sözleşmenin ifası*)
- Erken erişim özellikleri için beta kullanıcılarını belirlemek (*meşru menfaat*)
- Sentry aracılığıyla çökme ve hataları tespit etmek ve düzeltmek (*meşru menfaat*)
- Destek taleplerine yanıt vermek (*meşru menfaat*)
- Geçerli mevzuata uymak ve Orbyt ile kullanıcıları zarardan korumak (*yasal yükümlülük / meşru menfaat*)

## Bilgilerinizi Nasıl Paylaşırız

- **AT Protocol Ağı**: Genel içeriğiniz, protokolün işleyişinin gerekli bir parçası olarak merkezi olmayan AT Protocol ağıyla (Bluesky ve üçüncü taraf uygulamalar dahil) paylaşılır.
- **Hizmet Sağlayıcılar**: Barındırma ve içerik dağıtımı için Cloudflare'i, hata izleme için Sentry'yi kullanırız. Bu sağlayıcılar, kendi gizlilik politikaları ve veri işleme sözleşmeleri kapsamında verilerimizi bizim adımıza işler.
- **Yasal Gereksinimler**: Yasalar, mahkeme kararları gerektirdiğinde veya Orbyt'ın, kullanıcılarımızın ya da kamuoyunun haklarını ve güvenliğini korumak için bilgileri ifşa edebiliriz. Yasaların izin verdiği durumlarda ifşa öncesinde sizi bilgilendirmeye çalışırız.
- **İşletme Devirleri**: Orbyt'ın bir birleşme, satın alma veya varlık satışına dahil olması durumunda bilgileriniz bu işlemin bir parçası olarak aktarılabilir. Kişisel verilerinizin farklı bir gizlilik politikasına tabi olmadan önce sizi bilgilendireceğiz.

Kişisel bilgilerinizi üçüncü taraflara satmıyoruz. Kişisel bilgilerinizi üçüncü taraf reklam amaçlarıyla paylaşmıyoruz.

## Veri Saklama

- **Sunucu Verileri**: Profil renkleri, katılım tarihi ve beta durumu, Bluesky hesabınız aktif olduğu ve Orbyt ile etkileşimde bulunduğunuz sürece saklanır. Hesap silme talebinizden veya hesabınızın silindiğine dair bildirim almamızdan itibaren 90 gün içinde bu verileri sileriz veya anonimleştiririz.
- **Yerel Veriler**: Cihazınızdaki veriler, uygulama önbelleğini temizleyene, uygulamayı silene veya hesabınızı kaldırana kadar kalır.
- **İzleme Geçmişi**: 30 gün sonra cihazınızdan otomatik olarak silinir.
- **Sunucu Günlükleri**: Standart erişim günlükleri (IP adresleri dahil) 30 gün içinde döndürülür ve silinir; ancak bir güvenlik olayını araştırmak veya yasal bir yükümlülüğü yerine getirmek için daha uzun süre saklanması gerekebilir.
- **Hata Raporları**: Çökme ve hata raporları Sentry tarafından varsayılan olarak 90 gün boyunca saklanır.

## Veri Silme

Verilerinizi şu yollarla silebilirsiniz:

- **Yerel Veriler**: Uygulama ayarlarında "Önbelleği Temizle" seçeneğini kullanın veya uygulamayı silin ve yeniden yükleyin
- **Hesap Kaldırma**: Tüm yerel hesap verilerini temizlemek için uygulama ayarlarında "Hesabı Kaldır" seçeneğini kullanın
- **Sunucu Verileri**: Sunucu tarafındaki verilerinizin silinmesini talep etmek için [bizimle iletişime geçin](/contact) — 30 gün içinde tamamlayacağız

### Silme Kısıtlamaları

AT Protocol'ün merkezi olmayan yapısı nedeniyle, ağdaki tüm hizmetlerde verilerinizin tamamen silineceğini garanti edemeyiz. İçerik sildiğinizde:

- İçeriğinizi Orbyt'tan kaldırmak için makul çaba göstereceğiz.
- AT Protocol ağındaki diğer hizmetlere silme bildirimleri göndereceğiz.
- Bağımsız AT Protocol hizmetlerini verilerinizi silmeye zorlayamayız. Bazı gönderiler, kontrolümüz dışındaki hizmetlerde var olmaya devam edebilir.
- Diğer AT Protocol hizmetlerinden kaldırılmasını talep etmek için bu hizmetlerle doğrudan iletişime geçin.

## Uluslararası Veri Aktarımları

Orbyt, Amerika Birleşik Devletleri'nden işletilmektedir. Uygulamaya ABD dışından erişiyorsanız, bilgileriniz ABD'ye veya hizmet sağlayıcılarımızın faaliyet gösterdiği diğer ülkelere aktarılabilir ve burada işlenebilir. Geçerli mevzuatın gerektirdiği durumlarda (ör. GDPR), sınır ötesi veri aktarımlarını korumak için Standart Sözleşme Maddeleri gibi uygun aktarım mekanizmalarına dayanıyoruz.

## Güvenlik

Bilgilerinizi korumak için makul teknik ve organizasyonel önlemler alırız:

- OAuth token'ları cihazınızın güvenli depolama alanında saklanır (iOS'ta Keychain, Android'de Keystore)
- API'miz tüm iletişimler için HTTPS şifrelemesi kullanır
- Bluesky şifrenizi saklamıyoruz

İnternet üzerinden yapılan hiçbir iletim yöntemi veya elektronik depolama %100 güvenli değildir. Mutlak güvenlik garanti edemeyiz ancak geçerli mevzuatın gerektirdiği şekilde veri ihlallerini size bildireceğiz.

## Çocukların Gizliliği

Orbyt, 13 yaşın altındaki çocuklara (veya ülkenizde geçerli olan minimum yaşa) yönelik değildir. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Bu tür bilgileri topladığımızı öğrenirsek, derhal silmek için adım atacağız. 13 yaşın altındaki bir çocuktan bilgi topladığımıza inanıyorsanız lütfen [bizimle iletişime geçin](/contact).

## Haklarınız

Konumunuza bağlı olarak kişisel bilgilerinizle ilgili aşağıdaki haklara sahip olabilirsiniz:

- **Erişim**: Hakkınızda tuttuğumuz kişisel verilerin bir kopyasını talep etmek
- **Düzeltme**: Yanlış veya eksik bilgilerin düzeltilmesini talep etmek
- **Silme**: Kişisel verilerinizin silinmesini talep etmek (yasal saklama yükümlülüklerine tabi olarak)
- **Taşınabilirlik**: Verilerinizi yapılandırılmış, makine tarafından okunabilir bir formatta almak
- **İtiraz**: Meşru menfaatlere dayalı işlemeye itiraz etmek
- **Kısıtlama**: Belirli koşullarda verilerinizin işlenmesini kısıtlamamızı talep etmek
- **Rızayı Geri Çekme**: İşleme rızaya dayandığında, önceki işlemeyi etkilemeksizin her zaman geri çekebilmek

Bu haklardan herhangi birini kullanmak için [bizimle iletişime geçin](/contact). Geçerli mevzuatın gerektirdiği süre içinde (genellikle 30 gün) yanıt vereceğiz. AEA, Birleşik Krallık veya İsviçre'de ikamet ediyorsanız, yerel veri koruma otoritenize şikayette bulunma hakkınız da bulunmaktadır.

## Bu Politikadaki Değişiklikler

Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler hakkında sizi uygulama aracılığıyla veya bu sayfanın üst kısmındaki "Son Güncelleme" tarihini güncelleyerek bilgilendireceğiz. Herhangi bir değişiklikten sonra Orbyt'ı kullanmaya devam etmeniz, güncellenen politikayı kabul ettiğiniz anlamına gelir.

## Bize Ulaşın

Bu Gizlilik Politikası hakkında sorularınız veya talepleriniz varsa [iletişim sayfamızı](/contact) ziyaret edin. Veri sahibi erişim talepleri için, mesajınıza "Gizlilik Talebi" yazın; böylece talebinize öncelik verebiliriz.
