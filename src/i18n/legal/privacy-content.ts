type LocaleKey = 'en' | 'de' | 'es-MX' | 'es-ES' | 'es-419' | 'fr' | 'it' | 'ja' | 'ko' | 'pt-BR' | 'tr'

const privacyContent: Record<LocaleKey, string> = {
  en: `
<p>This Privacy Policy describes how Orbyt ("we", "us", "our") collects, uses, and shares information when you use our mobile application ("Orbyt" or "the App").</p>

<p><strong>Important:</strong> Orbyt is a third-party client application that connects to the Bluesky network via the AT Protocol. When you use Orbyt, your data is shared with the decentralized AT Protocol network. You should also review <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Bluesky's Privacy Policy</a> to understand how your data is handled on their network.</p>

<h2>Information We Collect</h2>

<h3>Information from Bluesky</h3>
<p>When you log in to Orbyt using your Bluesky account, we access the following information from your Bluesky profile:</p>
<ul>
  <li><strong>DID (Decentralized Identifier)</strong>: Your unique identifier on the AT Protocol</li>
  <li><strong>Handle</strong>: Your username (e.g., @username.bsky.social)</li>
  <li><strong>Display Name</strong>: Your profile display name</li>
  <li><strong>Avatar</strong>: Your profile picture</li>
</ul>
<p>We use Bluesky's OAuth system for authentication. Orbyt does not store your Bluesky password.</p>

<h3>Information Stored on Our Servers</h3>
<p>We maintain a small amount of data on our servers to provide Orbyt-specific features:</p>
<ul>
  <li><strong>Profile Colors</strong>: Custom text and background colors you set in the app</li>
  <li><strong>Join Date</strong>: The date you first used Orbyt (for beta user features)</li>
  <li><strong>Beta Status</strong>: Whether you are an early Orbyt user</li>
</ul>
<p>This data is indexed from your com.getorbyt.profile record on the AT Protocol and is minimal by design.</p>

<h3>Information Stored Locally on Your Device</h3>
<p>The following information is stored only on your device and is not sent to our servers:</p>
<ul>
  <li><strong>Account Information</strong>: Your saved Bluesky accounts for quick switching</li>
  <li><strong>OAuth Tokens</strong>: Secure authentication tokens (stored in device secure storage)</li>
  <li><strong>Subscribed Channels</strong>: Feeds and channels you've subscribed to</li>
  <li><strong>Watch History</strong>: Videos you've watched (used to filter your "Your Mix" feed)</li>
  <li><strong>App Preferences</strong>: Your settings and UI preferences</li>
</ul>

<h3>Information Shared with the AT Protocol Network</h3>
<p>Orbyt operates on the AT Protocol, a decentralized social networking protocol. When you use Orbyt, the following information is shared with and stored on the AT Protocol network (including Bluesky and other services):</p>
<ul>
  <li><strong>Public Content</strong>: Your posts, profile information, display name, avatar, bio, likes, follows, blocks, and other social interactions are public by design and visible to anyone on the AT Protocol network.</li>
  <li><strong>Orbyt Profile Data</strong>: Your profile colors and subscribed channels are stored in your com.getorbyt.profile record on the AT Protocol.</li>
</ul>
<p>This data is not controlled solely by Orbyt and is subject to the policies of the AT Protocol network and its operators, including Bluesky Social, PBC.</p>

<h3>Automatically Collected Information</h3>
<p>When you use Orbyt, we may automatically collect:</p>
<ul>
  <li><strong>Device Information</strong>: Device type, operating system, and app version (for compatibility and troubleshooting)</li>
  <li><strong>IP Address</strong>: Collected through standard network requests to our API</li>
</ul>

<h3>Website Analytics</h3>
<p>Our website (getorbyt.com) uses <strong>Cloudflare Web Analytics</strong>, a privacy-focused analytics service. Cloudflare Web Analytics:</p>
<ul>
  <li>Does not use cookies</li>
  <li>Does not track individual users across sites</li>
  <li>Does not collect personal information</li>
  <li>Only collects aggregate, anonymized data about page views and performance</li>
</ul>
<p>You can learn more about Cloudflare's privacy practices at <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>The Orbyt mobile app does not use any third-party analytics or tracking services.</strong></p>

<h2>How We Use Your Information</h2>
<p>We use the information we collect to:</p>
<ul>
  <li>Provide and operate the Orbyt app</li>
  <li>Enable you to sign in with your Bluesky account</li>
  <li>Display your profile colors and customizations</li>
  <li>Show personalized feed content based on your subscriptions</li>
  <li>Filter your "Your Mix" feed based on watch history (processed locally)</li>
  <li>Identify beta users for early access features</li>
  <li>Respond to support requests</li>
</ul>

<h2>How We Share Your Information</h2>
<ul>
  <li><strong>AT Protocol Network</strong>: When you use Orbyt, your public content is shared with the decentralized AT Protocol network, including Bluesky and other services. This sharing is necessary for the app to function.</li>
  <li><strong>Service Providers</strong>: We use Cloudflare for hosting and content delivery. They may process data on our behalf subject to their privacy policies.</li>
  <li><strong>Legal Requirements</strong>: We may disclose information if required by law or to protect our rights and safety.</li>
</ul>
<p>We do not sell your personal information.</p>

<h2>Data Retention</h2>
<ul>
  <li><strong>Server Data</strong>: Profile colors and join dates are retained while your Bluesky account exists and has interacted with Orbyt.</li>
  <li><strong>Local Data</strong>: Data stored on your device remains until you clear the app cache, delete the app, or remove your account.</li>
  <li><strong>Watch History</strong>: Automatically cleaned up after 30 days.</li>
</ul>

<h2>Data Deletion</h2>
<p>You can delete your data in the following ways:</p>
<ul>
  <li><strong>Local Data</strong>: Use "Clear Cache" in app settings, or delete and reinstall the app</li>
  <li><strong>Account Removal</strong>: Use "Remove Account" in app settings to clear all local account data</li>
  <li><strong>Server Data</strong>: <a href="/contact">Contact us</a> to request deletion of your server-side data</li>
</ul>

<h3>Limitations on Deletion (AT Protocol)</h3>
<p><strong>Important:</strong> Due to the decentralized nature of the AT Protocol, we cannot guarantee complete deletion of your data across all services on the network. When you delete content:</p>
<ul>
  <li>We will use reasonable efforts to remove your content from Orbyt.</li>
  <li>We will notify other services on the AT Protocol of the deletion.</li>
  <li>However, we cannot control or force other services and applications on the AT Protocol to delete your data. Some posts and information may continue to exist on services outside our control.</li>
  <li>To request removal from other AT Protocol services, you must contact those services directly.</li>
</ul>

<h2>Security</h2>
<p>We take reasonable measures to protect your information:</p>
<ul>
  <li>OAuth tokens are stored in your device's secure storage (Keychain on iOS, Keystore on Android)</li>
  <li>Our API uses HTTPS encryption for all communications</li>
  <li>We do not store your Bluesky password</li>
</ul>
<p>However, no method of transmission over the internet or electronic storage is 100% secure.</p>

<h2>Children's Privacy</h2>
<p>Orbyt is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us.</p>

<h2>Your Rights</h2>
<p>Depending on your location, you may have rights regarding your personal information, including:</p>
<ul>
  <li>Access to your personal information</li>
  <li>Correction of inaccurate information</li>
  <li>Deletion of your information</li>
  <li>Data portability</li>
</ul>
<p>To exercise these rights, <a href="/contact">contact us</a>.</p>

<h2>Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or by updating the "Last Updated" date above.</p>

<h2>Contact Us</h2>
<p>If you have questions about this Privacy Policy, visit our <a href="/contact">contact page</a>.</p>
`,

  de: `
<p>Diese Datenschutzerklärung beschreibt, wie Orbyt („wir", „uns", „unser") Informationen erhebt, verwendet und weitergibt, wenn Sie unsere mobile Anwendung („Orbyt" oder „die App") nutzen.</p>

<p><strong>Wichtig:</strong> Orbyt ist eine Drittanbieter-Client-Anwendung, die über das AT-Protokoll eine Verbindung zum Bluesky-Netzwerk herstellt. Wenn Sie Orbyt nutzen, werden Ihre Daten mit dem dezentralen AT-Protokoll-Netzwerk geteilt. Sie sollten auch die <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Datenschutzerklärung von Bluesky</a> lesen, um zu verstehen, wie Ihre Daten in deren Netzwerk behandelt werden.</p>

<h2>Informationen, die wir erheben</h2>

<h3>Informationen von Bluesky</h3>
<p>Wenn Sie sich mit Ihrem Bluesky-Konto bei Orbyt anmelden, greifen wir auf folgende Informationen aus Ihrem Bluesky-Profil zu:</p>
<ul>
  <li><strong>DID (Dezentraler Identifikator)</strong>: Ihre eindeutige Kennung im AT-Protokoll</li>
  <li><strong>Handle</strong>: Ihr Benutzername (z.B. @benutzername.bsky.social)</li>
  <li><strong>Anzeigename</strong>: Ihr Profil-Anzeigename</li>
  <li><strong>Avatar</strong>: Ihr Profilbild</li>
</ul>
<p>Wir verwenden das OAuth-System von Bluesky zur Authentifizierung. Orbyt speichert Ihr Bluesky-Passwort nicht.</p>

<h3>Auf unseren Servern gespeicherte Informationen</h3>
<p>Wir bewahren eine kleine Datenmenge auf unseren Servern auf, um Orbyt-spezifische Funktionen bereitzustellen:</p>
<ul>
  <li><strong>Profilfarben</strong>: Benutzerdefinierte Text- und Hintergrundfarben, die Sie in der App eingestellt haben</li>
  <li><strong>Beitrittsdatum</strong>: Das Datum, an dem Sie Orbyt zum ersten Mal genutzt haben (für Beta-Nutzer-Funktionen)</li>
  <li><strong>Beta-Status</strong>: Ob Sie ein früher Orbyt-Nutzer sind</li>
</ul>
<p>Diese Daten werden aus Ihrem com.getorbyt.profile-Datensatz im AT-Protokoll indiziert und sind bewusst minimal gehalten.</p>

<h3>Lokal auf Ihrem Gerät gespeicherte Informationen</h3>
<p>Die folgenden Informationen werden nur auf Ihrem Gerät gespeichert und nicht an unsere Server übermittelt:</p>
<ul>
  <li><strong>Kontoinformationen</strong>: Ihre gespeicherten Bluesky-Konten für schnelles Wechseln</li>
  <li><strong>OAuth-Token</strong>: Sichere Authentifizierungstoken (gespeichert im sicheren Gerätespeicher)</li>
  <li><strong>Abonnierte Kanäle</strong>: Feeds und Kanäle, die Sie abonniert haben</li>
  <li><strong>Wiedergabeverlauf</strong>: Videos, die Sie angesehen haben (verwendet zum Filtern Ihres „Ihr Mix"-Feeds)</li>
  <li><strong>App-Einstellungen</strong>: Ihre Einstellungen und UI-Präferenzen</li>
</ul>

<h3>Mit dem AT-Protokoll-Netzwerk geteilte Informationen</h3>
<p>Orbyt betreibt das AT-Protokoll, ein dezentrales Soziales Netzwerkprotokoll. Wenn Sie Orbyt nutzen, werden folgende Informationen mit dem AT-Protokoll-Netzwerk (einschließlich Bluesky und anderen Diensten) geteilt und dort gespeichert:</p>
<ul>
  <li><strong>Öffentliche Inhalte</strong>: Ihre Beiträge, Profilinformationen, Anzeigename, Avatar, Bio, Likes, Follows, Blocks und andere soziale Interaktionen sind standardmäßig öffentlich und für jeden im AT-Protokoll-Netzwerk sichtbar.</li>
  <li><strong>Orbyt-Profildaten</strong>: Ihre Profilfarben und abonnierten Kanäle werden in Ihrem com.getorbyt.profile-Datensatz im AT-Protokoll gespeichert.</li>
</ul>
<p>Diese Daten werden nicht ausschließlich von Orbyt kontrolliert und unterliegen den Richtlinien des AT-Protokoll-Netzwerks und seiner Betreiber, einschließlich Bluesky Social, PBC.</p>

<h3>Automatisch erhobene Informationen</h3>
<p>Wenn Sie Orbyt nutzen, erheben wir möglicherweise automatisch:</p>
<ul>
  <li><strong>Geräteinformationen</strong>: Gerätetyp, Betriebssystem und App-Version (für Kompatibilität und Fehlerbehebung)</li>
  <li><strong>IP-Adresse</strong>: Wird durch standardmäßige Netzwerkanfragen an unsere API erhoben</li>
</ul>

<h3>Website-Analyse</h3>
<p>Unsere Website (getorbyt.com) verwendet <strong>Cloudflare Web Analytics</strong>, einen datenschutzorientierten Analysedienst. Cloudflare Web Analytics:</p>
<ul>
  <li>Verwendet keine Cookies</li>
  <li>Verfolgt keine einzelnen Nutzer seitenübergreifend</li>
  <li>Erhebt keine personenbezogenen Daten</li>
  <li>Erhebt nur aggregierte, anonymisierte Daten über Seitenaufrufe und Leistung</li>
</ul>
<p>Mehr über die Datenschutzpraktiken von Cloudflare erfahren Sie unter <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>Die Orbyt-Mobile-App verwendet keine Analyse- oder Tracking-Dienste von Drittanbietern.</strong></p>

<h2>Wie wir Ihre Informationen verwenden</h2>
<p>Wir verwenden die erhobenen Informationen, um:</p>
<ul>
  <li>Die Orbyt-App bereitzustellen und zu betreiben</li>
  <li>Ihnen die Anmeldung mit Ihrem Bluesky-Konto zu ermöglichen</li>
  <li>Ihre Profilfarben und Anpassungen anzuzeigen</li>
  <li>Personalisierte Feed-Inhalte basierend auf Ihren Abonnements anzuzeigen</li>
  <li>Ihren „Ihr Mix"-Feed basierend auf dem Wiedergabeverlauf zu filtern (wird lokal verarbeitet)</li>
  <li>Beta-Nutzer für frühen Zugang zu Funktionen zu identifizieren</li>
  <li>Auf Support-Anfragen zu antworten</li>
</ul>

<h2>Wie wir Ihre Informationen weitergeben</h2>
<ul>
  <li><strong>AT-Protokoll-Netzwerk</strong>: Wenn Sie Orbyt nutzen, werden Ihre öffentlichen Inhalte mit dem dezentralen AT-Protokoll-Netzwerk, einschließlich Bluesky und anderen Diensten, geteilt. Diese Weitergabe ist für die Funktionsfähigkeit der App notwendig.</li>
  <li><strong>Dienstleister</strong>: Wir verwenden Cloudflare für Hosting und Content Delivery. Sie können Daten in unserem Auftrag gemäß ihren Datenschutzerklärungen verarbeiten.</li>
  <li><strong>Rechtliche Anforderungen</strong>: Wir können Informationen offenlegen, wenn dies gesetzlich vorgeschrieben ist oder zum Schutz unserer Rechte und Sicherheit erforderlich ist.</li>
</ul>
<p>Wir verkaufen Ihre personenbezogenen Daten nicht.</p>

<h2>Datenspeicherung</h2>
<ul>
  <li><strong>Serverdaten</strong>: Profilfarben und Beitrittsdaten werden gespeichert, solange Ihr Bluesky-Konto besteht und mit Orbyt interagiert hat.</li>
  <li><strong>Lokale Daten</strong>: Auf Ihrem Gerät gespeicherte Daten bleiben bestehen, bis Sie den App-Cache leeren, die App löschen oder Ihr Konto entfernen.</li>
  <li><strong>Wiedergabeverlauf</strong>: Wird nach 30 Tagen automatisch bereinigt.</li>
</ul>

<h2>Datenlöschung</h2>
<p>Sie können Ihre Daten auf folgende Weise löschen:</p>
<ul>
  <li><strong>Lokale Daten</strong>: Verwenden Sie „Cache leeren" in den App-Einstellungen oder löschen Sie die App und installieren Sie sie neu</li>
  <li><strong>Kontoentfernung</strong>: Verwenden Sie „Konto entfernen" in den App-Einstellungen, um alle lokalen Kontodaten zu löschen</li>
  <li><strong>Serverdaten</strong>: <a href="/contact">Kontaktieren Sie uns</a>, um die Löschung Ihrer serverseitigen Daten anzufordern</li>
</ul>

<h3>Einschränkungen bei der Löschung (AT-Protokoll)</h3>
<p><strong>Wichtig:</strong> Aufgrund des dezentralen Charakters des AT-Protokolls können wir keine vollständige Löschung Ihrer Daten über alle Dienste im Netzwerk garantieren. Wenn Sie Inhalte löschen:</p>
<ul>
  <li>Werden wir angemessene Anstrengungen unternehmen, um Ihre Inhalte aus Orbyt zu entfernen.</li>
  <li>Werden wir andere Dienste im AT-Protokoll über die Löschung informieren.</li>
  <li>Wir können jedoch andere Dienste und Anwendungen im AT-Protokoll nicht kontrollieren oder zwingen, Ihre Daten zu löschen. Einige Beiträge und Informationen können weiterhin auf Diensten außerhalb unserer Kontrolle existieren.</li>
  <li>Um die Entfernung von anderen AT-Protokoll-Diensten anzufordern, müssen Sie diese direkt kontaktieren.</li>
</ul>

<h2>Sicherheit</h2>
<p>Wir ergreifen angemessene Maßnahmen zum Schutz Ihrer Informationen:</p>
<ul>
  <li>OAuth-Token werden im sicheren Speicher Ihres Geräts gespeichert (Keychain auf iOS, Keystore auf Android)</li>
  <li>Unsere API verwendet HTTPS-Verschlüsselung für alle Kommunikationen</li>
  <li>Wir speichern Ihr Bluesky-Passwort nicht</li>
</ul>
<p>Keine Übertragungsmethode über das Internet oder elektronische Speicherung ist jedoch 100% sicher.</p>

<h2>Datenschutz für Kinder</h2>
<p>Orbyt richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie glauben, dass wir Informationen von einem Kind unter 13 Jahren erhoben haben, wenden Sie sich bitte an uns.</p>

<h2>Ihre Rechte</h2>
<p>Je nach Ihrem Standort können Sie Rechte bezüglich Ihrer personenbezogenen Daten haben, einschließlich:</p>
<ul>
  <li>Zugang zu Ihren personenbezogenen Daten</li>
  <li>Berichtigung ungenauer Informationen</li>
  <li>Löschung Ihrer Informationen</li>
  <li>Datenportabilität</li>
</ul>
<p>Um diese Rechte auszuüben, <a href="/contact">kontaktieren Sie uns</a>.</p>

<h2>Änderungen an dieser Erklärung</h2>
<p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen durch die App oder durch Aktualisierung des obigen Datums „Zuletzt aktualisiert" informieren.</p>

<h2>Kontaktieren Sie uns</h2>
<p>Wenn Sie Fragen zu dieser Datenschutzerklärung haben, besuchen Sie unsere <a href="/contact">Kontaktseite</a>.</p>
`,

  'es-419': `
<p>Esta Política de Privacidad describe cómo Orbyt ("nosotros", "nos", "nuestro") recopila, usa y comparte información cuando utilizas nuestra aplicación móvil ("Orbyt" o "la App").</p>

<p><strong>Importante:</strong> Orbyt es una aplicación cliente de terceros que se conecta a la red Bluesky a través del AT Protocol. Cuando usas Orbyt, tus datos se comparten con la red descentralizada del AT Protocol. También debes revisar la <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Política de Privacidad de Bluesky</a> para entender cómo se manejan tus datos en su red.</p>

<h2>Información que Recopilamos</h2>

<h3>Información de Bluesky</h3>
<p>Cuando inicias sesión en Orbyt con tu cuenta de Bluesky, accedemos a la siguiente información de tu perfil de Bluesky:</p>
<ul>
  <li><strong>DID (Identificador Descentralizado)</strong>: Tu identificador único en el AT Protocol</li>
  <li><strong>Handle</strong>: Tu nombre de usuario (ej., @usuario.bsky.social)</li>
  <li><strong>Nombre para Mostrar</strong>: El nombre que aparece en tu perfil</li>
  <li><strong>Avatar</strong>: Tu foto de perfil</li>
</ul>
<p>Usamos el sistema OAuth de Bluesky para la autenticación. Orbyt no almacena tu contraseña de Bluesky.</p>

<h3>Información Almacenada en Nuestros Servidores</h3>
<p>Mantenemos una pequeña cantidad de datos en nuestros servidores para proporcionar funciones específicas de Orbyt:</p>
<ul>
  <li><strong>Colores de Perfil</strong>: Colores personalizados de texto y fondo que configuras en la app</li>
  <li><strong>Fecha de Registro</strong>: La fecha en que usaste Orbyt por primera vez (para funciones de usuarios beta)</li>
  <li><strong>Estado Beta</strong>: Si eres un usuario temprano de Orbyt</li>
</ul>
<p>Estos datos se indexan de tu registro com.getorbyt.profile en el AT Protocol y son mínimos por diseño.</p>

<h3>Información Almacenada Localmente en tu Dispositivo</h3>
<p>La siguiente información se almacena solo en tu dispositivo y no se envía a nuestros servidores:</p>
<ul>
  <li><strong>Información de Cuenta</strong>: Tus cuentas de Bluesky guardadas para cambio rápido</li>
  <li><strong>Tokens OAuth</strong>: Tokens de autenticación seguros (almacenados en el almacenamiento seguro del dispositivo)</li>
  <li><strong>Canales Suscritos</strong>: Feeds y canales a los que te has suscrito</li>
  <li><strong>Historial de Reproducción</strong>: Videos que has visto (usados para filtrar tu feed "Tu Mezcla")</li>
  <li><strong>Preferencias de la App</strong>: Tu configuración y preferencias de interfaz</li>
</ul>

<h3>Información Compartida con la Red del AT Protocol</h3>
<p>Orbyt opera en el AT Protocol, un protocolo de red social descentralizado. Cuando usas Orbyt, la siguiente información se comparte y almacena en la red del AT Protocol (incluidos Bluesky y otros servicios):</p>
<ul>
  <li><strong>Contenido Público</strong>: Tus publicaciones, información de perfil, nombre para mostrar, avatar, bio, "me gusta", seguidores, bloqueos y otras interacciones sociales son públicas por diseño y visibles para cualquier persona en la red del AT Protocol.</li>
  <li><strong>Datos del Perfil de Orbyt</strong>: Tus colores de perfil y canales suscritos se almacenan en tu registro com.getorbyt.profile en el AT Protocol.</li>
</ul>
<p>Estos datos no son controlados únicamente por Orbyt y están sujetos a las políticas de la red del AT Protocol y sus operadores, incluidos Bluesky Social, PBC.</p>

<h3>Información Recopilada Automáticamente</h3>
<p>Cuando usas Orbyt, podemos recopilar automáticamente:</p>
<ul>
  <li><strong>Información del Dispositivo</strong>: Tipo de dispositivo, sistema operativo y versión de la app (para compatibilidad y resolución de problemas)</li>
  <li><strong>Dirección IP</strong>: Recopilada a través de solicitudes de red estándar a nuestra API</li>
</ul>

<h3>Análisis del Sitio Web</h3>
<p>Nuestro sitio web (getorbyt.com) usa <strong>Cloudflare Web Analytics</strong>, un servicio de análisis centrado en la privacidad. Cloudflare Web Analytics:</p>
<ul>
  <li>No usa cookies</li>
  <li>No rastrea usuarios individuales entre sitios</li>
  <li>No recopila información personal</li>
  <li>Solo recopila datos agregados y anonimizados sobre vistas de página y rendimiento</li>
</ul>
<p>Puedes obtener más información sobre las prácticas de privacidad de Cloudflare en <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>La aplicación móvil de Orbyt no utiliza ningún servicio de análisis o seguimiento de terceros.</strong></p>

<h2>Cómo Usamos tu Información</h2>
<p>Usamos la información que recopilamos para:</p>
<ul>
  <li>Proporcionar y operar la app de Orbyt</li>
  <li>Permitirte iniciar sesión con tu cuenta de Bluesky</li>
  <li>Mostrar tus colores de perfil y personalizaciones</li>
  <li>Mostrar contenido de feed personalizado según tus suscripciones</li>
  <li>Filtrar tu feed "Tu Mezcla" según el historial de reproducción (procesado localmente)</li>
  <li>Identificar usuarios beta para funciones de acceso anticipado</li>
  <li>Responder solicitudes de soporte</li>
</ul>

<h2>Cómo Compartimos tu Información</h2>
<ul>
  <li><strong>Red del AT Protocol</strong>: Cuando usas Orbyt, tu contenido público se comparte con la red descentralizada del AT Protocol, incluidos Bluesky y otros servicios. Este intercambio es necesario para que la app funcione.</li>
  <li><strong>Proveedores de Servicios</strong>: Usamos Cloudflare para alojamiento y entrega de contenido. Pueden procesar datos en nuestro nombre sujeto a sus políticas de privacidad.</li>
  <li><strong>Requisitos Legales</strong>: Podemos divulgar información si lo exige la ley o para proteger nuestros derechos y seguridad.</li>
</ul>
<p>No vendemos tu información personal.</p>

<h2>Retención de Datos</h2>
<ul>
  <li><strong>Datos del Servidor</strong>: Los colores de perfil y fechas de registro se conservan mientras tu cuenta de Bluesky exista y haya interactuado con Orbyt.</li>
  <li><strong>Datos Locales</strong>: Los datos almacenados en tu dispositivo permanecen hasta que borres la caché de la app, elimines la app o elimines tu cuenta.</li>
  <li><strong>Historial de Reproducción</strong>: Se limpia automáticamente después de 30 días.</li>
</ul>

<h2>Eliminación de Datos</h2>
<p>Puedes eliminar tus datos de las siguientes maneras:</p>
<ul>
  <li><strong>Datos Locales</strong>: Usa "Borrar Caché" en la configuración de la app, o elimina y reinstala la app</li>
  <li><strong>Eliminación de Cuenta</strong>: Usa "Eliminar Cuenta" en la configuración de la app para borrar todos los datos locales de la cuenta</li>
  <li><strong>Datos del Servidor</strong>: <a href="/contact">Contáctanos</a> para solicitar la eliminación de tus datos en el servidor</li>
</ul>

<h3>Limitaciones en la Eliminación (AT Protocol)</h3>
<p><strong>Importante:</strong> Debido a la naturaleza descentralizada del AT Protocol, no podemos garantizar la eliminación completa de tus datos en todos los servicios de la red. Cuando eliminas contenido:</p>
<ul>
  <li>Usaremos esfuerzos razonables para eliminar tu contenido de Orbyt.</li>
  <li>Notificaremos a otros servicios en el AT Protocol de la eliminación.</li>
  <li>Sin embargo, no podemos controlar ni obligar a otros servicios y aplicaciones en el AT Protocol a eliminar tus datos. Algunas publicaciones e información pueden seguir existiendo en servicios fuera de nuestro control.</li>
  <li>Para solicitar la eliminación de otros servicios del AT Protocol, debes contactarlos directamente.</li>
</ul>

<h2>Seguridad</h2>
<p>Tomamos medidas razonables para proteger tu información:</p>
<ul>
  <li>Los tokens OAuth se almacenan en el almacenamiento seguro de tu dispositivo (Keychain en iOS, Keystore en Android)</li>
  <li>Nuestra API usa cifrado HTTPS para todas las comunicaciones</li>
  <li>No almacenamos tu contraseña de Bluesky</li>
</ul>
<p>Sin embargo, ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro.</p>

<h2>Privacidad de los Menores</h2>
<p>Orbyt no está destinado a niños menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años. Si crees que hemos recopilado información de un niño menor de 13 años, por favor contáctanos.</p>

<h2>Tus Derechos</h2>
<p>Según tu ubicación, puedes tener derechos sobre tu información personal, incluidos:</p>
<ul>
  <li>Acceso a tu información personal</li>
  <li>Corrección de información inexacta</li>
  <li>Eliminación de tu información</li>
  <li>Portabilidad de datos</li>
</ul>
<p>Para ejercer estos derechos, <a href="/contact">contáctanos</a>.</p>

<h2>Cambios a esta Política</h2>
<p>Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cambios significativos a través de la app o actualizando la fecha de "Última Actualización" indicada arriba.</p>

<h2>Contáctanos</h2>
<p>Si tienes preguntas sobre esta Política de Privacidad, visita nuestra <a href="/contact">página de contacto</a>.</p>
`,

  'es-ES': `
<p>Esta Política de Privacidad describe cómo Orbyt ("nosotros", "nos", "nuestro") recopila, utiliza y comparte información cuando utilizas nuestra aplicación móvil ("Orbyt" o "la App").</p>

<p><strong>Importante:</strong> Orbyt es una aplicación cliente de terceros que se conecta a la red Bluesky a través del AT Protocol. Cuando utilizas Orbyt, tus datos se comparten con la red descentralizada del AT Protocol. También debes revisar la <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Política de Privacidad de Bluesky</a> para entender cómo se tratan tus datos en su red.</p>

<h2>Información que Recopilamos</h2>

<h3>Información de Bluesky</h3>
<p>Cuando inicias sesión en Orbyt con tu cuenta de Bluesky, accedemos a la siguiente información de tu perfil de Bluesky:</p>
<ul>
  <li><strong>DID (Identificador Descentralizado)</strong>: Tu identificador único en el AT Protocol</li>
  <li><strong>Handle</strong>: Tu nombre de usuario (ej., @usuario.bsky.social)</li>
  <li><strong>Nombre para Mostrar</strong>: El nombre que aparece en tu perfil</li>
  <li><strong>Avatar</strong>: Tu foto de perfil</li>
</ul>
<p>Utilizamos el sistema OAuth de Bluesky para la autenticación. Orbyt no almacena tu contraseña de Bluesky.</p>

<h3>Información Almacenada en Nuestros Servidores</h3>
<p>Mantenemos una pequeña cantidad de datos en nuestros servidores para proporcionar funciones específicas de Orbyt:</p>
<ul>
  <li><strong>Colores de Perfil</strong>: Colores personalizados de texto y fondo que configuras en la app</li>
  <li><strong>Fecha de Registro</strong>: La fecha en que utilizaste Orbyt por primera vez (para funciones de usuarios beta)</li>
  <li><strong>Estado Beta</strong>: Si eres un usuario inicial de Orbyt</li>
</ul>
<p>Estos datos se indexan de tu registro com.getorbyt.profile en el AT Protocol y son mínimos por diseño.</p>

<h3>Información Almacenada Localmente en tu Dispositivo</h3>
<p>La siguiente información se almacena únicamente en tu dispositivo y no se envía a nuestros servidores:</p>
<ul>
  <li><strong>Información de Cuenta</strong>: Tus cuentas de Bluesky guardadas para cambio rápido</li>
  <li><strong>Tokens OAuth</strong>: Tokens de autenticación seguros (almacenados en el almacenamiento seguro del dispositivo)</li>
  <li><strong>Canales Suscritos</strong>: Feeds y canales a los que te has suscrito</li>
  <li><strong>Historial de Reproducción</strong>: Vídeos que has visto (utilizados para filtrar tu feed "Tu Mezcla")</li>
  <li><strong>Preferencias de la App</strong>: Tu configuración y preferencias de interfaz</li>
</ul>

<h3>Información Compartida con la Red del AT Protocol</h3>
<p>Orbyt opera en el AT Protocol, un protocolo de red social descentralizado. Cuando utilizas Orbyt, la siguiente información se comparte y almacena en la red del AT Protocol (incluidos Bluesky y otros servicios):</p>
<ul>
  <li><strong>Contenido Público</strong>: Tus publicaciones, información de perfil, nombre para mostrar, avatar, bio, "me gusta", seguidores, bloqueos y otras interacciones sociales son públicas por diseño y visibles para cualquier persona en la red del AT Protocol.</li>
  <li><strong>Datos del Perfil de Orbyt</strong>: Tus colores de perfil y canales suscritos se almacenan en tu registro com.getorbyt.profile en el AT Protocol.</li>
</ul>
<p>Estos datos no son controlados únicamente por Orbyt y están sujetos a las políticas de la red del AT Protocol y sus operadores, incluidos Bluesky Social, PBC.</p>

<h3>Información Recopilada Automáticamente</h3>
<p>Cuando utilizas Orbyt, podemos recopilar automáticamente:</p>
<ul>
  <li><strong>Información del Dispositivo</strong>: Tipo de dispositivo, sistema operativo y versión de la app (para compatibilidad y resolución de problemas)</li>
  <li><strong>Dirección IP</strong>: Recopilada a través de solicitudes de red estándar a nuestra API</li>
</ul>

<h3>Análisis del Sitio Web</h3>
<p>Nuestro sitio web (getorbyt.com) utiliza <strong>Cloudflare Web Analytics</strong>, un servicio de análisis centrado en la privacidad. Cloudflare Web Analytics:</p>
<ul>
  <li>No utiliza cookies</li>
  <li>No rastrea usuarios individuales entre sitios</li>
  <li>No recopila información personal</li>
  <li>Solo recopila datos agregados y anonimizados sobre visitas de página y rendimiento</li>
</ul>
<p>Puedes obtener más información sobre las prácticas de privacidad de Cloudflare en <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>La aplicación móvil de Orbyt no utiliza ningún servicio de análisis o seguimiento de terceros.</strong></p>

<h2>Cómo Utilizamos tu Información</h2>
<p>Utilizamos la información que recopilamos para:</p>
<ul>
  <li>Proporcionar y operar la app de Orbyt</li>
  <li>Permitirte iniciar sesión con tu cuenta de Bluesky</li>
  <li>Mostrar tus colores de perfil y personalizaciones</li>
  <li>Mostrar contenido de feed personalizado según tus suscripciones</li>
  <li>Filtrar tu feed "Tu Mezcla" según el historial de reproducción (procesado localmente)</li>
  <li>Identificar usuarios beta para funciones de acceso anticipado</li>
  <li>Responder solicitudes de asistencia</li>
</ul>

<h2>Cómo Compartimos tu Información</h2>
<ul>
  <li><strong>Red del AT Protocol</strong>: Cuando utilizas Orbyt, tu contenido público se comparte con la red descentralizada del AT Protocol, incluidos Bluesky y otros servicios. Este intercambio es necesario para que la app funcione.</li>
  <li><strong>Proveedores de Servicios</strong>: Utilizamos Cloudflare para alojamiento y entrega de contenido. Pueden tratar datos en nuestro nombre conforme a sus políticas de privacidad.</li>
  <li><strong>Requisitos Legales</strong>: Podemos divulgar información si así lo exige la ley o para proteger nuestros derechos y seguridad.</li>
</ul>
<p>No vendemos tu información personal.</p>

<h2>Retención de Datos</h2>
<ul>
  <li><strong>Datos del Servidor</strong>: Los colores de perfil y fechas de registro se conservan mientras tu cuenta de Bluesky exista y haya interactuado con Orbyt.</li>
  <li><strong>Datos Locales</strong>: Los datos almacenados en tu dispositivo permanecen hasta que borres la caché de la app, elimines la app o elimines tu cuenta.</li>
  <li><strong>Historial de Reproducción</strong>: Se limpia automáticamente después de 30 días.</li>
</ul>

<h2>Eliminación de Datos</h2>
<p>Puedes eliminar tus datos de las siguientes maneras:</p>
<ul>
  <li><strong>Datos Locales</strong>: Utiliza "Borrar Caché" en la configuración de la app, o elimina y reinstala la app</li>
  <li><strong>Eliminación de Cuenta</strong>: Utiliza "Eliminar Cuenta" en la configuración de la app para borrar todos los datos locales de la cuenta</li>
  <li><strong>Datos del Servidor</strong>: <a href="/contact">Contáctanos</a> para solicitar la eliminación de tus datos en el servidor</li>
</ul>

<h3>Limitaciones en la Eliminación (AT Protocol)</h3>
<p><strong>Importante:</strong> Debido a la naturaleza descentralizada del AT Protocol, no podemos garantizar la eliminación completa de tus datos en todos los servicios de la red. Cuando eliminas contenido:</p>
<ul>
  <li>Utilizaremos esfuerzos razonables para eliminar tu contenido de Orbyt.</li>
  <li>Notificaremos a otros servicios en el AT Protocol de la eliminación.</li>
  <li>Sin embargo, no podemos controlar ni obligar a otros servicios y aplicaciones en el AT Protocol a eliminar tus datos. Algunas publicaciones e información pueden seguir existiendo en servicios fuera de nuestro control.</li>
  <li>Para solicitar la eliminación de otros servicios del AT Protocol, debes contactarlos directamente.</li>
</ul>

<h2>Seguridad</h2>
<p>Tomamos medidas razonables para proteger tu información:</p>
<ul>
  <li>Los tokens OAuth se almacenan en el almacenamiento seguro de tu dispositivo (Keychain en iOS, Keystore en Android)</li>
  <li>Nuestra API utiliza cifrado HTTPS para todas las comunicaciones</li>
  <li>No almacenamos tu contraseña de Bluesky</li>
</ul>
<p>No obstante, ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro.</p>

<h2>Privacidad de los Menores</h2>
<p>Orbyt no está destinado a menores de 13 años. No recopilamos conscientemente información personal de menores de 13 años. Si crees que hemos recopilado información de un menor de 13 años, por favor contáctanos.</p>

<h2>Tus Derechos</h2>
<p>Según tu ubicación, puedes tener derechos sobre tu información personal, entre los que se incluyen:</p>
<ul>
  <li>Acceso a tu información personal</li>
  <li>Rectificación de información inexacta</li>
  <li>Supresión de tu información</li>
  <li>Portabilidad de datos</li>
</ul>
<p>Para ejercer estos derechos, <a href="/contact">contáctanos</a>.</p>

<h2>Cambios a esta Política</h2>
<p>Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cambios significativos a través de la app o actualizando la fecha de "Última actualización" indicada arriba.</p>

<h2>Contacto</h2>
<p>Si tienes preguntas sobre esta Política de Privacidad, visita nuestra <a href="/contact">página de contacto</a>.</p>
`,

  'es-MX': `
<p>Esta Política de Privacidad describe cómo Orbyt ("nosotros", "nos", "nuestro") recopila, usa y comparte información cuando usas nuestra aplicación móvil ("Orbyt" o "la App").</p>

<p><strong>Importante:</strong> Orbyt es una aplicación cliente de terceros que se conecta a la red Bluesky a través del AT Protocol. Cuando usas Orbyt, tus datos se comparten con la red descentralizada del AT Protocol. También debes revisar la <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Política de Privacidad de Bluesky</a> para entender cómo se manejan tus datos en su red.</p>

<h2>Información que Recopilamos</h2>

<h3>Información de Bluesky</h3>
<p>Cuando inicias sesión en Orbyt con tu cuenta de Bluesky, accedemos a la siguiente información de tu perfil de Bluesky:</p>
<ul>
  <li><strong>DID (Identificador Descentralizado)</strong>: Tu identificador único en el AT Protocol</li>
  <li><strong>Handle</strong>: Tu nombre de usuario (ej., @usuario.bsky.social)</li>
  <li><strong>Nombre de Pantalla</strong>: El nombre que aparece en tu perfil</li>
  <li><strong>Avatar</strong>: Tu foto de perfil</li>
</ul>
<p>Usamos el sistema OAuth de Bluesky para la autenticación. Orbyt no guarda tu contraseña de Bluesky.</p>

<h3>Información Almacenada en Nuestros Servidores</h3>
<p>Mantenemos una pequeña cantidad de datos en nuestros servidores para proporcionar funciones específicas de Orbyt:</p>
<ul>
  <li><strong>Colores de Perfil</strong>: Colores personalizados de texto y fondo que configuras en la app</li>
  <li><strong>Fecha de Registro</strong>: La fecha en que usaste Orbyt por primera vez (para funciones de usuarios beta)</li>
  <li><strong>Estado Beta</strong>: Si eres un usuario temprano de Orbyt</li>
</ul>
<p>Estos datos se indexan de tu registro com.getorbyt.profile en el AT Protocol y son mínimos por diseño.</p>

<h3>Información Almacenada Localmente en tu Dispositivo</h3>
<p>La siguiente información se almacena únicamente en tu dispositivo y no se envía a nuestros servidores:</p>
<ul>
  <li><strong>Información de Cuenta</strong>: Tus cuentas de Bluesky guardadas para cambio rápido</li>
  <li><strong>Tokens OAuth</strong>: Tokens de autenticación seguros (almacenados en el almacenamiento seguro del dispositivo)</li>
  <li><strong>Canales Suscritos</strong>: Feeds y canales a los que te has suscrito</li>
  <li><strong>Historial de Reproducción</strong>: Videos que has visto (usados para filtrar tu feed "Tu Mezcla")</li>
  <li><strong>Preferencias de la App</strong>: Tu configuración y preferencias de interfaz</li>
</ul>

<h3>Información Compartida con la Red del AT Protocol</h3>
<p>Orbyt opera en el AT Protocol, un protocolo de red social descentralizado. Cuando usas Orbyt, la siguiente información se comparte y almacena en la red del AT Protocol (incluyendo Bluesky y otros servicios):</p>
<ul>
  <li><strong>Contenido Público</strong>: Tus publicaciones, información de perfil, nombre de pantalla, avatar, bio, "me gusta", seguidores, bloqueos y otras interacciones sociales son públicas por diseño y visibles para cualquier persona en la red del AT Protocol.</li>
  <li><strong>Datos del Perfil de Orbyt</strong>: Tus colores de perfil y canales suscritos se almacenan en tu registro com.getorbyt.profile en el AT Protocol.</li>
</ul>
<p>Estos datos no son controlados únicamente por Orbyt y están sujetos a las políticas de la red del AT Protocol y sus operadores, incluyendo Bluesky Social, PBC.</p>

<h3>Información Recopilada Automáticamente</h3>
<p>Cuando usas Orbyt, podemos recopilar automáticamente:</p>
<ul>
  <li><strong>Información del Dispositivo</strong>: Tipo de dispositivo, sistema operativo y versión de la app (para compatibilidad y solución de problemas)</li>
  <li><strong>Dirección IP</strong>: Recopilada a través de solicitudes de red estándar a nuestra API</li>
</ul>

<h3>Analíticas del Sitio Web</h3>
<p>Nuestro sitio web (getorbyt.com) usa <strong>Cloudflare Web Analytics</strong>, un servicio de analíticas enfocado en la privacidad. Cloudflare Web Analytics:</p>
<ul>
  <li>No usa cookies</li>
  <li>No rastrea usuarios individuales entre sitios</li>
  <li>No recopila información personal</li>
  <li>Solo recopila datos agregados y anonimizados sobre visitas de página y rendimiento</li>
</ul>
<p>Puedes obtener más información sobre las prácticas de privacidad de Cloudflare en <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>La aplicación móvil de Orbyt no usa ningún servicio de analíticas o rastreo de terceros.</strong></p>

<h2>Cómo Usamos tu Información</h2>
<p>Usamos la información que recopilamos para:</p>
<ul>
  <li>Proporcionar y operar la app de Orbyt</li>
  <li>Permitirte iniciar sesión con tu cuenta de Bluesky</li>
  <li>Mostrar tus colores de perfil y personalizaciones</li>
  <li>Mostrar contenido de feed personalizado según tus suscripciones</li>
  <li>Filtrar tu feed "Tu Mezcla" según el historial de reproducción (procesado localmente)</li>
  <li>Identificar usuarios beta para funciones de acceso anticipado</li>
  <li>Responder solicitudes de soporte</li>
</ul>

<h2>Cómo Compartimos tu Información</h2>
<ul>
  <li><strong>Red del AT Protocol</strong>: Cuando usas Orbyt, tu contenido público se comparte con la red descentralizada del AT Protocol, incluyendo Bluesky y otros servicios. Este intercambio es necesario para que la app funcione.</li>
  <li><strong>Proveedores de Servicios</strong>: Usamos Cloudflare para alojamiento y entrega de contenido. Pueden procesar datos en nuestro nombre de acuerdo con sus políticas de privacidad.</li>
  <li><strong>Requisitos Legales</strong>: Podemos divulgar información si lo requiere la ley o para proteger nuestros derechos y seguridad.</li>
</ul>
<p>No vendemos tu información personal.</p>

<h2>Retención de Datos</h2>
<ul>
  <li><strong>Datos del Servidor</strong>: Los colores de perfil y fechas de registro se conservan mientras tu cuenta de Bluesky exista y haya interactuado con Orbyt.</li>
  <li><strong>Datos Locales</strong>: Los datos almacenados en tu dispositivo permanecen hasta que borres el caché de la app, elimines la app o elimines tu cuenta.</li>
  <li><strong>Historial de Reproducción</strong>: Se limpia automáticamente después de 30 días.</li>
</ul>

<h2>Eliminación de Datos</h2>
<p>Puedes eliminar tus datos de las siguientes maneras:</p>
<ul>
  <li><strong>Datos Locales</strong>: Usa "Limpiar Caché" en la configuración de la app, o elimina y reinstala la app</li>
  <li><strong>Eliminación de Cuenta</strong>: Usa "Eliminar Cuenta" en la configuración de la app para borrar todos los datos locales de la cuenta</li>
  <li><strong>Datos del Servidor</strong>: <a href="/contact">Contáctanos</a> para solicitar la eliminación de tus datos en el servidor</li>
</ul>

<h3>Limitaciones en la Eliminación (AT Protocol)</h3>
<p><strong>Importante:</strong> Debido a la naturaleza descentralizada del AT Protocol, no podemos garantizar la eliminación completa de tus datos en todos los servicios de la red. Cuando eliminas contenido:</p>
<ul>
  <li>Usaremos esfuerzos razonables para eliminar tu contenido de Orbyt.</li>
  <li>Notificaremos a otros servicios en el AT Protocol de la eliminación.</li>
  <li>Sin embargo, no podemos controlar ni obligar a otros servicios y aplicaciones en el AT Protocol a eliminar tus datos. Algunas publicaciones e información pueden seguir existiendo en servicios fuera de nuestro control.</li>
  <li>Para solicitar la eliminación de otros servicios del AT Protocol, debes contactarlos directamente.</li>
</ul>

<h2>Seguridad</h2>
<p>Tomamos medidas razonables para proteger tu información:</p>
<ul>
  <li>Los tokens OAuth se almacenan en el almacenamiento seguro de tu dispositivo (Keychain en iOS, Keystore en Android)</li>
  <li>Nuestra API usa cifrado HTTPS para todas las comunicaciones</li>
  <li>No almacenamos tu contraseña de Bluesky</li>
</ul>
<p>Sin embargo, ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro.</p>

<h2>Privacidad de los Menores</h2>
<p>Orbyt no está destinado a menores de 13 años. No recopilamos conscientemente información personal de menores de 13 años. Si crees que hemos recopilado información de un menor de 13 años, contáctanos.</p>

<h2>Tus Derechos</h2>
<p>Dependiendo de tu ubicación, puedes tener derechos sobre tu información personal, incluyendo:</p>
<ul>
  <li>Acceso a tu información personal</li>
  <li>Corrección de información incorrecta</li>
  <li>Eliminación de tu información</li>
  <li>Portabilidad de datos</li>
</ul>
<p>Para ejercer estos derechos, <a href="/contact">contáctanos</a>.</p>

<h2>Cambios a esta Política</h2>
<p>Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cambios significativos a través de la app o actualizando la fecha de "Última Actualización" indicada arriba.</p>

<h2>Contáctanos</h2>
<p>Si tienes preguntas sobre esta Política de Privacidad, visita nuestra <a href="/contact">página de contacto</a>.</p>
`,

  fr: `
<p>Cette Politique de Confidentialité décrit comment Orbyt (« nous », « notre ») collecte, utilise et partage des informations lorsque vous utilisez notre application mobile (« Orbyt » ou « l'App »).</p>

<p><strong>Important :</strong> Orbyt est une application cliente tierce qui se connecte au réseau Bluesky via l'AT Protocol. Lorsque vous utilisez Orbyt, vos données sont partagées avec le réseau décentralisé de l'AT Protocol. Vous devriez également consulter la <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Politique de Confidentialité de Bluesky</a> pour comprendre comment vos données sont traitées sur leur réseau.</p>

<h2>Informations que nous collectons</h2>

<h3>Informations provenant de Bluesky</h3>
<p>Lorsque vous vous connectez à Orbyt avec votre compte Bluesky, nous accédons aux informations suivantes de votre profil Bluesky :</p>
<ul>
  <li><strong>DID (Identifiant Décentralisé)</strong> : Votre identifiant unique sur l'AT Protocol</li>
  <li><strong>Handle</strong> : Votre nom d'utilisateur (ex. @utilisateur.bsky.social)</li>
  <li><strong>Nom d'Affichage</strong> : Le nom affiché sur votre profil</li>
  <li><strong>Avatar</strong> : Votre photo de profil</li>
</ul>
<p>Nous utilisons le système OAuth de Bluesky pour l'authentification. Orbyt ne stocke pas votre mot de passe Bluesky.</p>

<h3>Informations Stockées sur Nos Serveurs</h3>
<p>Nous conservons une petite quantité de données sur nos serveurs pour fournir des fonctionnalités spécifiques à Orbyt :</p>
<ul>
  <li><strong>Couleurs de Profil</strong> : Couleurs personnalisées de texte et d'arrière-plan que vous définissez dans l'application</li>
  <li><strong>Date d'Inscription</strong> : La date à laquelle vous avez utilisé Orbyt pour la première fois (pour les fonctionnalités des utilisateurs bêta)</li>
  <li><strong>Statut Bêta</strong> : Si vous êtes un utilisateur initial d'Orbyt</li>
</ul>
<p>Ces données sont indexées à partir de votre enregistrement com.getorbyt.profile sur l'AT Protocol et sont minimales par conception.</p>

<h3>Informations Stockées Localement sur Votre Appareil</h3>
<p>Les informations suivantes sont stockées uniquement sur votre appareil et ne sont pas envoyées à nos serveurs :</p>
<ul>
  <li><strong>Informations de Compte</strong> : Vos comptes Bluesky enregistrés pour un changement rapide</li>
  <li><strong>Tokens OAuth</strong> : Tokens d'authentification sécurisés (stockés dans le stockage sécurisé de l'appareil)</li>
  <li><strong>Chaînes Abonnées</strong> : Les flux et chaînes auxquels vous vous êtes abonné</li>
  <li><strong>Historique de Visionnage</strong> : Les vidéos que vous avez regardées (utilisées pour filtrer votre flux "Votre Mix")</li>
  <li><strong>Préférences de l'App</strong> : Vos paramètres et préférences d'interface</li>
</ul>

<h3>Informations Partagées avec le Réseau AT Protocol</h3>
<p>Orbyt fonctionne sur l'AT Protocol, un protocole de réseau social décentralisé. Lorsque vous utilisez Orbyt, les informations suivantes sont partagées avec et stockées sur le réseau AT Protocol (y compris Bluesky et d'autres services) :</p>
<ul>
  <li><strong>Contenu Public</strong> : Vos publications, informations de profil, nom d'affichage, avatar, bio, « j'aime », abonnements, blocages et autres interactions sociales sont publics par conception et visibles par toute personne sur le réseau AT Protocol.</li>
  <li><strong>Données de Profil Orbyt</strong> : Vos couleurs de profil et chaînes abonnées sont stockées dans votre enregistrement com.getorbyt.profile sur l'AT Protocol.</li>
</ul>
<p>Ces données ne sont pas contrôlées uniquement par Orbyt et sont soumises aux politiques du réseau AT Protocol et de ses opérateurs, y compris Bluesky Social, PBC.</p>

<h3>Informations Collectées Automatiquement</h3>
<p>Lorsque vous utilisez Orbyt, nous pouvons collecter automatiquement :</p>
<ul>
  <li><strong>Informations sur l'Appareil</strong> : Type d'appareil, système d'exploitation et version de l'application (pour la compatibilité et le dépannage)</li>
  <li><strong>Adresse IP</strong> : Collectée via les requêtes réseau standard à notre API</li>
</ul>

<h3>Analyses du Site Web</h3>
<p>Notre site web (getorbyt.com) utilise <strong>Cloudflare Web Analytics</strong>, un service d'analyse axé sur la confidentialité. Cloudflare Web Analytics :</p>
<ul>
  <li>N'utilise pas de cookies</li>
  <li>Ne suit pas les utilisateurs individuels entre les sites</li>
  <li>Ne collecte pas d'informations personnelles</li>
  <li>Ne collecte que des données agrégées et anonymisées sur les pages vues et les performances</li>
</ul>
<p>Vous pouvez en savoir plus sur les pratiques de confidentialité de Cloudflare sur <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>L'application mobile Orbyt n'utilise aucun service d'analyse ou de suivi tiers.</strong></p>

<h2>Comment Nous Utilisons Vos Informations</h2>
<p>Nous utilisons les informations collectées pour :</p>
<ul>
  <li>Fournir et exploiter l'application Orbyt</li>
  <li>Vous permettre de vous connecter avec votre compte Bluesky</li>
  <li>Afficher vos couleurs de profil et personnalisations</li>
  <li>Afficher du contenu de flux personnalisé en fonction de vos abonnements</li>
  <li>Filtrer votre flux "Votre Mix" en fonction de l'historique de visionnage (traité localement)</li>
  <li>Identifier les utilisateurs bêta pour les fonctionnalités d'accès anticipé</li>
  <li>Répondre aux demandes d'assistance</li>
</ul>

<h2>Comment Nous Partageons Vos Informations</h2>
<ul>
  <li><strong>Réseau AT Protocol</strong> : Lorsque vous utilisez Orbyt, votre contenu public est partagé avec le réseau décentralisé AT Protocol, y compris Bluesky et d'autres services. Ce partage est nécessaire au fonctionnement de l'application.</li>
  <li><strong>Fournisseurs de Services</strong> : Nous utilisons Cloudflare pour l'hébergement et la distribution de contenu. Ils peuvent traiter des données en notre nom conformément à leurs politiques de confidentialité.</li>
  <li><strong>Exigences Légales</strong> : Nous pouvons divulguer des informations si la loi l'exige ou pour protéger nos droits et notre sécurité.</li>
</ul>
<p>Nous ne vendons pas vos informations personnelles.</p>

<h2>Conservation des Données</h2>
<ul>
  <li><strong>Données Serveur</strong> : Les couleurs de profil et les dates d'inscription sont conservées tant que votre compte Bluesky existe et a interagi avec Orbyt.</li>
  <li><strong>Données Locales</strong> : Les données stockées sur votre appareil restent jusqu'à ce que vous vidiez le cache de l'application, supprimiez l'application ou supprimiez votre compte.</li>
  <li><strong>Historique de Visionnage</strong> : Nettoyé automatiquement après 30 jours.</li>
</ul>

<h2>Suppression des Données</h2>
<p>Vous pouvez supprimer vos données de la manière suivante :</p>
<ul>
  <li><strong>Données Locales</strong> : Utilisez "Vider le Cache" dans les paramètres de l'application, ou supprimez et réinstallez l'application</li>
  <li><strong>Suppression de Compte</strong> : Utilisez "Supprimer le Compte" dans les paramètres de l'application pour effacer toutes les données de compte locales</li>
  <li><strong>Données Serveur</strong> : <a href="/contact">Contactez-nous</a> pour demander la suppression de vos données côté serveur</li>
</ul>

<h3>Limitations de la Suppression (AT Protocol)</h3>
<p><strong>Important :</strong> En raison de la nature décentralisée de l'AT Protocol, nous ne pouvons pas garantir la suppression complète de vos données sur tous les services du réseau. Lorsque vous supprimez du contenu :</p>
<ul>
  <li>Nous ferons des efforts raisonnables pour supprimer votre contenu d'Orbyt.</li>
  <li>Nous informerons les autres services de l'AT Protocol de la suppression.</li>
  <li>Cependant, nous ne pouvons pas contrôler ni forcer d'autres services et applications de l'AT Protocol à supprimer vos données. Certaines publications et informations peuvent continuer à exister sur des services hors de notre contrôle.</li>
  <li>Pour demander la suppression auprès d'autres services AT Protocol, vous devez les contacter directement.</li>
</ul>

<h2>Sécurité</h2>
<p>Nous prenons des mesures raisonnables pour protéger vos informations :</p>
<ul>
  <li>Les tokens OAuth sont stockés dans le stockage sécurisé de votre appareil (Keychain sur iOS, Keystore sur Android)</li>
  <li>Notre API utilise le chiffrement HTTPS pour toutes les communications</li>
  <li>Nous ne stockons pas votre mot de passe Bluesky</li>
</ul>
<p>Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée à 100 %.</p>

<h2>Confidentialité des Enfants</h2>
<p>Orbyt n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous pensez que nous avons collecté des informations auprès d'un enfant de moins de 13 ans, veuillez nous contacter.</p>

<h2>Vos Droits</h2>
<p>Selon votre lieu de résidence, vous pouvez avoir des droits concernant vos informations personnelles, notamment :</p>
<ul>
  <li>Accès à vos informations personnelles</li>
  <li>Correction des informations inexactes</li>
  <li>Suppression de vos informations</li>
  <li>Portabilité des données</li>
</ul>
<p>Pour exercer ces droits, <a href="/contact">contactez-nous</a>.</p>

<h2>Modifications de cette Politique</h2>
<p>Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Nous vous informerons des changements importants via l'application ou en mettant à jour la date de « Dernière Mise à Jour » ci-dessus.</p>

<h2>Nous Contacter</h2>
<p>Si vous avez des questions sur cette Politique de Confidentialité, visitez notre <a href="/contact">page de contact</a>.</p>
`,

  it: `
<p>Questa Informativa sulla Privacy descrive come Orbyt ("noi", "ci", "nostro") raccoglie, usa e condivide informazioni quando utilizzi la nostra applicazione mobile ("Orbyt" o "l'App").</p>

<p><strong>Importante:</strong> Orbyt è un'applicazione client di terze parti che si connette alla rete Bluesky tramite l'AT Protocol. Quando utilizzi Orbyt, i tuoi dati vengono condivisi con la rete decentralizzata dell'AT Protocol. Dovresti anche esaminare l'<a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Informativa sulla Privacy di Bluesky</a> per capire come vengono gestiti i tuoi dati sulla loro rete.</p>

<h2>Informazioni che Raccogliamo</h2>

<h3>Informazioni da Bluesky</h3>
<p>Quando accedi a Orbyt utilizzando il tuo account Bluesky, accediamo alle seguenti informazioni dal tuo profilo Bluesky:</p>
<ul>
  <li><strong>DID (Identificatore Decentralizzato)</strong>: Il tuo identificatore univoco sull'AT Protocol</li>
  <li><strong>Handle</strong>: Il tuo nome utente (es. @nomeutente.bsky.social)</li>
  <li><strong>Nome Visualizzato</strong>: Il nome visualizzato nel tuo profilo</li>
  <li><strong>Avatar</strong>: La tua foto del profilo</li>
</ul>
<p>Utilizziamo il sistema OAuth di Bluesky per l'autenticazione. Orbyt non memorizza la tua password Bluesky.</p>

<h3>Informazioni Memorizzate sui Nostri Server</h3>
<p>Manteniamo una piccola quantità di dati sui nostri server per fornire funzionalità specifiche di Orbyt:</p>
<ul>
  <li><strong>Colori del Profilo</strong>: Colori personalizzati di testo e sfondo che imposti nell'app</li>
  <li><strong>Data di Iscrizione</strong>: La data in cui hai utilizzato Orbyt per la prima volta (per le funzionalità degli utenti beta)</li>
  <li><strong>Stato Beta</strong>: Se sei un utente iniziale di Orbyt</li>
</ul>
<p>Questi dati sono indicizzati dal tuo record com.getorbyt.profile sull'AT Protocol e sono minimi per scelta progettuale.</p>

<h3>Informazioni Memorizzate Localmente sul Tuo Dispositivo</h3>
<p>Le seguenti informazioni sono memorizzate solo sul tuo dispositivo e non vengono inviate ai nostri server:</p>
<ul>
  <li><strong>Informazioni Account</strong>: I tuoi account Bluesky salvati per il cambio rapido</li>
  <li><strong>Token OAuth</strong>: Token di autenticazione sicuri (memorizzati nell'archiviazione sicura del dispositivo)</li>
  <li><strong>Canali Abbonati</strong>: Feed e canali a cui ti sei iscritto</li>
  <li><strong>Cronologia Visualizzazioni</strong>: Video che hai guardato (usati per filtrare il tuo feed "Il Tuo Mix")</li>
  <li><strong>Preferenze dell'App</strong>: Le tue impostazioni e preferenze dell'interfaccia</li>
</ul>

<h3>Informazioni Condivise con la Rete AT Protocol</h3>
<p>Orbyt opera sull'AT Protocol, un protocollo di social networking decentralizzato. Quando utilizzi Orbyt, le seguenti informazioni vengono condivise e memorizzate sulla rete AT Protocol (inclusi Bluesky e altri servizi):</p>
<ul>
  <li><strong>Contenuto Pubblico</strong>: I tuoi post, le informazioni del profilo, il nome visualizzato, l'avatar, la bio, i "mi piace", i follow, i blocchi e altre interazioni sociali sono pubblici per impostazione predefinita e visibili a chiunque sulla rete AT Protocol.</li>
  <li><strong>Dati del Profilo Orbyt</strong>: I tuoi colori del profilo e i canali abbonati sono memorizzati nel tuo record com.getorbyt.profile sull'AT Protocol.</li>
</ul>
<p>Questi dati non sono controllati esclusivamente da Orbyt e sono soggetti alle politiche della rete AT Protocol e dei suoi operatori, incluso Bluesky Social, PBC.</p>

<h3>Informazioni Raccolte Automaticamente</h3>
<p>Quando utilizzi Orbyt, potremmo raccogliere automaticamente:</p>
<ul>
  <li><strong>Informazioni sul Dispositivo</strong>: Tipo di dispositivo, sistema operativo e versione dell'app (per compatibilità e risoluzione dei problemi)</li>
  <li><strong>Indirizzo IP</strong>: Raccolto tramite richieste di rete standard alla nostra API</li>
</ul>

<h3>Analisi del Sito Web</h3>
<p>Il nostro sito web (getorbyt.com) utilizza <strong>Cloudflare Web Analytics</strong>, un servizio di analisi incentrato sulla privacy. Cloudflare Web Analytics:</p>
<ul>
  <li>Non utilizza cookie</li>
  <li>Non traccia i singoli utenti tra siti diversi</li>
  <li>Non raccoglie informazioni personali</li>
  <li>Raccoglie solo dati aggregati e anonimizzati su visualizzazioni di pagina e prestazioni</li>
</ul>
<p>Puoi saperne di più sulle pratiche di privacy di Cloudflare su <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>L'applicazione mobile Orbyt non utilizza servizi di analisi o tracciamento di terze parti.</strong></p>

<h2>Come Utilizziamo le Tue Informazioni</h2>
<p>Utilizziamo le informazioni raccolte per:</p>
<ul>
  <li>Fornire e gestire l'app Orbyt</li>
  <li>Consentirti di accedere con il tuo account Bluesky</li>
  <li>Visualizzare i tuoi colori del profilo e le personalizzazioni</li>
  <li>Mostrare contenuti del feed personalizzati in base ai tuoi abbonamenti</li>
  <li>Filtrare il tuo feed "Il Tuo Mix" in base alla cronologia delle visualizzazioni (elaborato localmente)</li>
  <li>Identificare gli utenti beta per le funzionalità di accesso anticipato</li>
  <li>Rispondere alle richieste di assistenza</li>
</ul>

<h2>Come Condividiamo le Tue Informazioni</h2>
<ul>
  <li><strong>Rete AT Protocol</strong>: Quando utilizzi Orbyt, il tuo contenuto pubblico viene condiviso con la rete decentralizzata AT Protocol, inclusi Bluesky e altri servizi. Questa condivisione è necessaria per il funzionamento dell'app.</li>
  <li><strong>Fornitori di Servizi</strong>: Utilizziamo Cloudflare per l'hosting e la distribuzione dei contenuti. Possono elaborare dati per nostro conto in conformità con le loro politiche sulla privacy.</li>
  <li><strong>Requisiti Legali</strong>: Potremmo divulgare informazioni se richiesto dalla legge o per proteggere i nostri diritti e la nostra sicurezza.</li>
</ul>
<p>Non vendiamo le tue informazioni personali.</p>

<h2>Conservazione dei Dati</h2>
<ul>
  <li><strong>Dati del Server</strong>: I colori del profilo e le date di iscrizione vengono conservati finché il tuo account Bluesky esiste e ha interagito con Orbyt.</li>
  <li><strong>Dati Locali</strong>: I dati memorizzati sul tuo dispositivo rimangono finché non svuoti la cache dell'app, elimini l'app o rimuovi il tuo account.</li>
  <li><strong>Cronologia Visualizzazioni</strong>: Viene ripulita automaticamente dopo 30 giorni.</li>
</ul>

<h2>Eliminazione dei Dati</h2>
<p>Puoi eliminare i tuoi dati nei seguenti modi:</p>
<ul>
  <li><strong>Dati Locali</strong>: Usa "Svuota Cache" nelle impostazioni dell'app, oppure elimina e reinstalla l'app</li>
  <li><strong>Rimozione Account</strong>: Usa "Rimuovi Account" nelle impostazioni dell'app per cancellare tutti i dati dell'account locale</li>
  <li><strong>Dati del Server</strong>: <a href="/contact">Contattaci</a> per richiedere l'eliminazione dei tuoi dati lato server</li>
</ul>

<h3>Limitazioni all'Eliminazione (AT Protocol)</h3>
<p><strong>Importante:</strong> A causa della natura decentralizzata dell'AT Protocol, non possiamo garantire la cancellazione completa dei tuoi dati su tutti i servizi della rete. Quando elimini contenuti:</p>
<ul>
  <li>Faremo sforzi ragionevoli per rimuovere i tuoi contenuti da Orbyt.</li>
  <li>Notificheremo agli altri servizi sull'AT Protocol l'avvenuta eliminazione.</li>
  <li>Tuttavia, non possiamo controllare o costringere altri servizi e applicazioni sull'AT Protocol a eliminare i tuoi dati. Alcuni post e informazioni potrebbero continuare a esistere su servizi al di fuori del nostro controllo.</li>
  <li>Per richiedere la rimozione da altri servizi AT Protocol, devi contattare tali servizi direttamente.</li>
</ul>

<h2>Sicurezza</h2>
<p>Adottiamo misure ragionevoli per proteggere le tue informazioni:</p>
<ul>
  <li>I token OAuth sono memorizzati nell'archiviazione sicura del tuo dispositivo (Keychain su iOS, Keystore su Android)</li>
  <li>La nostra API utilizza la crittografia HTTPS per tutte le comunicazioni</li>
  <li>Non memorizziamo la tua password Bluesky</li>
</ul>
<p>Tuttavia, nessun metodo di trasmissione su Internet o di archiviazione elettronica è sicuro al 100%.</p>

<h2>Privacy dei Minori</h2>
<p>Orbyt non è destinato a bambini di età inferiore ai 13 anni. Non raccogliamo consapevolmente informazioni personali da bambini di età inferiore ai 13 anni. Se ritieni che abbiamo raccolto informazioni da un bambino di età inferiore ai 13 anni, contattaci.</p>

<h2>I Tuoi Diritti</h2>
<p>A seconda della tua posizione, potresti avere diritti riguardanti le tue informazioni personali, tra cui:</p>
<ul>
  <li>Accesso alle tue informazioni personali</li>
  <li>Correzione di informazioni inesatte</li>
  <li>Cancellazione delle tue informazioni</li>
  <li>Portabilità dei dati</li>
</ul>
<p>Per esercitare questi diritti, <a href="/contact">contattaci</a>.</p>

<h2>Modifiche a questa Politica</h2>
<p>Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Ti informeremo di modifiche significative tramite l'app o aggiornando la data di "Ultimo Aggiornamento" sopra indicata.</p>

<h2>Contattaci</h2>
<p>Se hai domande su questa Informativa sulla Privacy, visita la nostra <a href="/contact">pagina dei contatti</a>.</p>
`,

  ja: `
<p>このプライバシーポリシーは、Orbyt（「私たち」「当社」）が、モバイルアプリケーション（「Orbyt」または「アプリ」）のご利用に際して情報をどのように収集、使用、共有するかについて説明します。</p>

<p><strong>重要：</strong> OrbytはATプロトコルを通じてBlueskyネットワークに接続するサードパーティクライアントアプリケーションです。Orbytを使用すると、あなたのデータは分散型ATプロトコルネットワークと共有されます。当社のネットワークでのデータの取り扱いを理解するために、<a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Blueskyのプライバシーポリシー</a>もご確認ください。</p>

<h2>収集する情報</h2>

<h3>Blueskyからの情報</h3>
<p>BlueskyアカウントでOrbytにログインすると、Blueskyプロフィールから以下の情報にアクセスします：</p>
<ul>
  <li><strong>DID（分散型識別子）</strong>：ATプロトコルでのあなたの一意の識別子</li>
  <li><strong>ハンドル</strong>：あなたのユーザー名（例：@ユーザー名.bsky.social）</li>
  <li><strong>表示名</strong>：プロフィールに表示される名前</li>
  <li><strong>アバター</strong>：プロフィール写真</li>
</ul>
<p>認証にはBlueskyのOAuthシステムを使用します。OrbytはBlueskyのパスワードを保存しません。</p>

<h3>当社サーバーに保存される情報</h3>
<p>Orbyt固有の機能を提供するために、当社サーバーに少量のデータを保持しています：</p>
<ul>
  <li><strong>プロフィールカラー</strong>：アプリで設定したカスタムテキストおよび背景色</li>
  <li><strong>参加日</strong>：Orbytを最初に使用した日付（ベータユーザー機能のため）</li>
  <li><strong>ベータステータス</strong>：初期のOrbytユーザーかどうか</li>
</ul>
<p>このデータはATプロトコル上のcom.getorbyt.profileレコードからインデックスされており、設計上最小限です。</p>

<h3>デバイスにローカル保存される情報</h3>
<p>以下の情報はデバイスにのみ保存され、当社サーバーには送信されません：</p>
<ul>
  <li><strong>アカウント情報</strong>：素早く切り替えるために保存されたBlueskyアカウント</li>
  <li><strong>OAuthトークン</strong>：セキュアな認証トークン（デバイスのセキュアストレージに保存）</li>
  <li><strong>チャンネル登録</strong>：購読しているフィードとチャンネル</li>
  <li><strong>視聴履歴</strong>：視聴した動画（「あなたのミックス」フィードのフィルタリングに使用）</li>
  <li><strong>アプリ設定</strong>：設定とUI好み</li>
</ul>

<h3>ATプロトコルネットワークと共有される情報</h3>
<p>OrbytはATプロトコル（分散型ソーシャルネットワーキングプロトコル）上で動作します。Orbytを使用すると、以下の情報がATプロトコルネットワーク（BlueskyやOtherサービスを含む）と共有・保存されます：</p>
<ul>
  <li><strong>公開コンテンツ</strong>：投稿、プロフィール情報、表示名、アバター、プロフィール紹介文、いいね、フォロー、ブロック、その他のソーシャルインタラクションは、設計上公開であり、ATプロトコルネットワーク上の誰でも閲覧できます。</li>
  <li><strong>Orbytプロフィールデータ</strong>：プロフィールカラーとチャンネル登録はATプロトコル上のcom.getorbyt.profileレコードに保存されます。</li>
</ul>
<p>このデータはOrbytだけが管理するものではなく、Bluesky Social, PBCを含むATプロトコルネットワークとその運営者のポリシーに従います。</p>

<h3>自動収集される情報</h3>
<p>Orbytを使用すると、当社は自動的に以下の情報を収集する場合があります：</p>
<ul>
  <li><strong>デバイス情報</strong>：デバイスの種類、OS、アプリバージョン（互換性とトラブルシューティングのため）</li>
  <li><strong>IPアドレス</strong>：当社APIへの標準的なネットワークリクエストで収集</li>
</ul>

<h3>ウェブサイト分析</h3>
<p>当社ウェブサイト（getorbyt.com）は、プライバシーを重視した分析サービスである<strong>Cloudflare Web Analytics</strong>を使用しています。Cloudflare Web Analyticsは：</p>
<ul>
  <li>Cookieを使用しません</li>
  <li>サイトをまたいで個人ユーザーを追跡しません</li>
  <li>個人情報を収集しません</li>
  <li>ページビューとパフォーマンスに関する集計・匿名化データのみを収集します</li>
</ul>
<p>Cloudflareのプライバシー慣行の詳細は<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>でご確認ください。</p>

<p><strong>Orbytモバイルアプリはサードパーティの分析やトラッキングサービスを使用していません。</strong></p>

<h2>情報の使用方法</h2>
<p>収集した情報は以下の目的で使用します：</p>
<ul>
  <li>Orbytアプリの提供と運営</li>
  <li>Blueskyアカウントでのサインインの有効化</li>
  <li>プロフィールカラーとカスタマイズの表示</li>
  <li>購読に基づいたパーソナライズされたフィードコンテンツの表示</li>
  <li>視聴履歴に基づいた「あなたのミックス」フィードのフィルタリング（ローカルで処理）</li>
  <li>早期アクセス機能のためのベータユーザーの特定</li>
  <li>サポートリクエストへの対応</li>
</ul>

<h2>情報の共有方法</h2>
<ul>
  <li><strong>ATプロトコルネットワーク</strong>：Orbytを使用すると、公開コンテンツはBlueskyやその他のサービスを含む分散型ATプロトコルネットワークと共有されます。この共有はアプリの機能に必要です。</li>
  <li><strong>サービスプロバイダー</strong>：ホスティングとコンテンツ配信にCloudflareを使用しています。彼らのプライバシーポリシーに従い、当社に代わってデータを処理する場合があります。</li>
  <li><strong>法的要件</strong>：法律で要求された場合、または当社の権利と安全を保護するために情報を開示する場合があります。</li>
</ul>
<p>当社はあなたの個人情報を販売しません。</p>

<h2>データ保持</h2>
<ul>
  <li><strong>サーバーデータ</strong>：プロフィールカラーと参加日は、BlueskyアカウントがOrbytと連携している間、保持されます。</li>
  <li><strong>ローカルデータ</strong>：デバイスに保存されたデータは、アプリのキャッシュをクリア、アプリを削除、またはアカウントを削除するまで残ります。</li>
  <li><strong>視聴履歴</strong>：30日後に自動的に削除されます。</li>
</ul>

<h2>データの削除</h2>
<p>以下の方法でデータを削除できます：</p>
<ul>
  <li><strong>ローカルデータ</strong>：アプリ設定の「キャッシュをクリア」を使用するか、アプリを削除して再インストールする</li>
  <li><strong>アカウント削除</strong>：アプリ設定の「アカウントを削除」を使用して、すべてのローカルアカウントデータを消去する</li>
  <li><strong>サーバーデータ</strong>：サーバー側のデータの削除を依頼するには<a href="/contact">お問い合わせください</a></li>
</ul>

<h3>削除の制限（ATプロトコル）</h3>
<p><strong>重要：</strong> ATプロトコルの分散的な性質により、ネットワーク上のすべてのサービスにわたるデータの完全な削除を保証することはできません。コンテンツを削除する場合：</p>
<ul>
  <li>Orbytからのコンテンツ削除に合理的な努力を行います。</li>
  <li>ATプロトコル上の他のサービスに削除を通知します。</li>
  <li>ただし、ATプロトコル上の他のサービスやアプリケーションにデータの削除を強制することはできません。一部の投稿や情報は、当社の管理外のサービスに引き続き存在する可能性があります。</li>
  <li>他のATプロトコルサービスからの削除を要求するには、そのサービスに直接連絡する必要があります。</li>
</ul>

<h2>セキュリティ</h2>
<p>当社はあなたの情報を保護するために合理的な措置を講じます：</p>
<ul>
  <li>OAuthトークンはデバイスのセキュアストレージ（iOSのKeychain、AndroidのKeystore）に保存されます</li>
  <li>当社APIはすべての通信にHTTPS暗号化を使用します</li>
  <li>Blueskyのパスワードは保存しません</li>
</ul>
<p>ただし、インターネット経由の送信や電子的な保存のいずれの方法も100%安全ではありません。</p>

<h2>子どものプライバシー</h2>
<p>Orbytは13歳未満の子どもを対象としていません。13歳未満の子どもから故意に個人情報を収集することはありません。13歳未満の子どもから情報を収集したと思われる場合は、お問い合わせください。</p>

<h2>あなたの権利</h2>
<p>お住まいの地域によっては、個人情報に関して以下のような権利を持つ場合があります：</p>
<ul>
  <li>個人情報へのアクセス</li>
  <li>不正確な情報の修正</li>
  <li>情報の削除</li>
  <li>データポータビリティ</li>
</ul>
<p>これらの権利を行使するには、<a href="/contact">お問い合わせください</a>。</p>

<h2>ポリシーの変更</h2>
<p>このプライバシーポリシーは随時更新する場合があります。重大な変更については、アプリを通じて、または上記の「最終更新日」を更新することでお知らせします。</p>

<h2>お問い合わせ</h2>
<p>このプライバシーポリシーについてご質問がある場合は、<a href="/contact">お問い合わせページ</a>をご覧ください。</p>
`,

  ko: `
<p>이 개인정보 처리방침은 Orbyt("우리", "저희")가 모바일 애플리케이션("Orbyt" 또는 "앱")을 사용할 때 정보를 어떻게 수집, 사용 및 공유하는지 설명합니다.</p>

<p><strong>중요:</strong> Orbyt는 AT Protocol을 통해 Bluesky 네트워크에 연결하는 서드파티 클라이언트 애플리케이션입니다. Orbyt를 사용하면 귀하의 데이터가 분산형 AT Protocol 네트워크와 공유됩니다. 해당 네트워크에서 귀하의 데이터가 어떻게 처리되는지 이해하기 위해 <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Bluesky 개인정보 처리방침</a>도 검토하시기 바랍니다.</p>

<h2>수집하는 정보</h2>

<h3>Bluesky로부터의 정보</h3>
<p>Bluesky 계정으로 Orbyt에 로그인하면 Bluesky 프로필에서 다음 정보에 접근합니다:</p>
<ul>
  <li><strong>DID (분산형 식별자)</strong>: AT Protocol에서의 고유 식별자</li>
  <li><strong>핸들</strong>: 사용자 이름 (예: @사용자이름.bsky.social)</li>
  <li><strong>표시 이름</strong>: 프로필에 표시되는 이름</li>
  <li><strong>아바타</strong>: 프로필 사진</li>
</ul>
<p>인증에는 Bluesky의 OAuth 시스템을 사용합니다. Orbyt는 귀하의 Bluesky 비밀번호를 저장하지 않습니다.</p>

<h3>당사 서버에 저장되는 정보</h3>
<p>Orbyt 전용 기능을 제공하기 위해 당사 서버에 소량의 데이터를 보관합니다:</p>
<ul>
  <li><strong>프로필 색상</strong>: 앱에서 설정한 사용자 지정 텍스트 및 배경 색상</li>
  <li><strong>가입 날짜</strong>: Orbyt를 처음 사용한 날짜 (베타 사용자 기능용)</li>
  <li><strong>베타 상태</strong>: 초기 Orbyt 사용자 여부</li>
</ul>
<p>이 데이터는 AT Protocol의 com.getorbyt.profile 레코드에서 인덱싱되며 설계상 최소화되어 있습니다.</p>

<h3>기기에 로컬로 저장되는 정보</h3>
<p>다음 정보는 기기에만 저장되며 당사 서버로 전송되지 않습니다:</p>
<ul>
  <li><strong>계정 정보</strong>: 빠른 전환을 위해 저장된 Bluesky 계정</li>
  <li><strong>OAuth 토큰</strong>: 보안 인증 토큰 (기기 보안 스토리지에 저장)</li>
  <li><strong>구독한 채널</strong>: 구독한 피드와 채널</li>
  <li><strong>시청 기록</strong>: 시청한 동영상 ("나의 믹스" 피드 필터링에 사용)</li>
  <li><strong>앱 환경설정</strong>: 설정 및 UI 선호도</li>
</ul>

<h3>AT Protocol 네트워크와 공유되는 정보</h3>
<p>Orbyt는 분산형 소셜 네트워킹 프로토콜인 AT Protocol에서 운영됩니다. Orbyt를 사용하면 다음 정보가 AT Protocol 네트워크(Bluesky 및 기타 서비스 포함)와 공유되고 저장됩니다:</p>
<ul>
  <li><strong>공개 콘텐츠</strong>: 게시물, 프로필 정보, 표시 이름, 아바타, 소개, 좋아요, 팔로우, 차단 및 기타 소셜 상호작용은 기본적으로 공개이며 AT Protocol 네트워크의 누구에게나 표시됩니다.</li>
  <li><strong>Orbyt 프로필 데이터</strong>: 프로필 색상과 구독한 채널은 AT Protocol의 com.getorbyt.profile 레코드에 저장됩니다.</li>
</ul>
<p>이 데이터는 Orbyt만이 통제하는 것이 아니며 Bluesky Social, PBC를 포함한 AT Protocol 네트워크 및 운영자의 정책을 따릅니다.</p>

<h3>자동으로 수집되는 정보</h3>
<p>Orbyt를 사용하면 다음 정보가 자동으로 수집될 수 있습니다:</p>
<ul>
  <li><strong>기기 정보</strong>: 기기 유형, 운영 체제 및 앱 버전 (호환성 및 문제 해결용)</li>
  <li><strong>IP 주소</strong>: 당사 API에 대한 표준 네트워크 요청을 통해 수집</li>
</ul>

<h3>웹사이트 분석</h3>
<p>당사 웹사이트(getorbyt.com)는 개인정보 보호 중심의 분석 서비스인 <strong>Cloudflare Web Analytics</strong>를 사용합니다. Cloudflare Web Analytics는:</p>
<ul>
  <li>쿠키를 사용하지 않습니다</li>
  <li>사이트 간 개별 사용자를 추적하지 않습니다</li>
  <li>개인 정보를 수집하지 않습니다</li>
  <li>페이지 방문 및 성능에 대한 집계, 익명화된 데이터만 수집합니다</li>
</ul>
<p>Cloudflare의 개인정보 보호 관행에 대한 자세한 내용은 <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>에서 확인할 수 있습니다.</p>

<p><strong>Orbyt 모바일 앱은 서드파티 분석 또는 추적 서비스를 사용하지 않습니다.</strong></p>

<h2>정보 사용 방법</h2>
<p>수집한 정보를 다음 목적으로 사용합니다:</p>
<ul>
  <li>Orbyt 앱 제공 및 운영</li>
  <li>Bluesky 계정으로 로그인 지원</li>
  <li>프로필 색상 및 사용자 지정 표시</li>
  <li>구독을 기반으로 개인화된 피드 콘텐츠 표시</li>
  <li>시청 기록을 기반으로 "나의 믹스" 피드 필터링 (로컬 처리)</li>
  <li>얼리 액세스 기능을 위한 베타 사용자 식별</li>
  <li>지원 요청에 응답</li>
</ul>

<h2>정보 공유 방법</h2>
<ul>
  <li><strong>AT Protocol 네트워크</strong>: Orbyt를 사용하면 공개 콘텐츠가 Bluesky 및 기타 서비스를 포함한 분산형 AT Protocol 네트워크와 공유됩니다. 이 공유는 앱 기능에 필요합니다.</li>
  <li><strong>서비스 제공업체</strong>: 호스팅 및 콘텐츠 전달을 위해 Cloudflare를 사용합니다. 해당 개인정보 처리방침에 따라 당사를 대신하여 데이터를 처리할 수 있습니다.</li>
  <li><strong>법적 요건</strong>: 법률에 따라 필요하거나 당사의 권리와 안전을 보호하기 위해 정보를 공개할 수 있습니다.</li>
</ul>
<p>당사는 귀하의 개인 정보를 판매하지 않습니다.</p>

<h2>데이터 보존</h2>
<ul>
  <li><strong>서버 데이터</strong>: 프로필 색상과 가입 날짜는 Bluesky 계정이 존재하고 Orbyt와 상호작용한 동안 보존됩니다.</li>
  <li><strong>로컬 데이터</strong>: 기기에 저장된 데이터는 앱 캐시를 지우거나, 앱을 삭제하거나, 계정을 제거할 때까지 유지됩니다.</li>
  <li><strong>시청 기록</strong>: 30일 후 자동으로 정리됩니다.</li>
</ul>

<h2>데이터 삭제</h2>
<p>다음 방법으로 데이터를 삭제할 수 있습니다:</p>
<ul>
  <li><strong>로컬 데이터</strong>: 앱 설정에서 "캐시 지우기"를 사용하거나, 앱을 삭제하고 재설치</li>
  <li><strong>계정 제거</strong>: 앱 설정에서 "계정 제거"를 사용하여 모든 로컬 계정 데이터 삭제</li>
  <li><strong>서버 데이터</strong>: 서버 측 데이터 삭제를 요청하려면 <a href="/contact">문의하세요</a></li>
</ul>

<h3>삭제 제한 사항 (AT Protocol)</h3>
<p><strong>중요:</strong> AT Protocol의 분산적 특성으로 인해 네트워크의 모든 서비스에서 귀하의 데이터가 완전히 삭제된다는 것을 보장할 수 없습니다. 콘텐츠를 삭제할 때:</p>
<ul>
  <li>Orbyt에서 귀하의 콘텐츠를 제거하기 위해 합리적인 노력을 기울입니다.</li>
  <li>AT Protocol의 다른 서비스에 삭제를 통지합니다.</li>
  <li>그러나 AT Protocol의 다른 서비스 및 애플리케이션이 귀하의 데이터를 삭제하도록 강제할 수 없습니다. 일부 게시물과 정보는 당사의 통제 외부의 서비스에 계속 존재할 수 있습니다.</li>
  <li>다른 AT Protocol 서비스에서 삭제를 요청하려면 해당 서비스에 직접 연락해야 합니다.</li>
</ul>

<h2>보안</h2>
<p>당사는 귀하의 정보를 보호하기 위해 합리적인 조치를 취합니다:</p>
<ul>
  <li>OAuth 토큰은 기기의 보안 스토리지(iOS의 Keychain, Android의 Keystore)에 저장됩니다</li>
  <li>당사 API는 모든 통신에 HTTPS 암호화를 사용합니다</li>
  <li>Bluesky 비밀번호를 저장하지 않습니다</li>
</ul>
<p>그러나 인터넷을 통한 전송이나 전자적 저장 방법이 100% 안전하지는 않습니다.</p>

<h2>아동 개인정보</h2>
<p>Orbyt는 만 13세 미만 아동을 대상으로 하지 않습니다. 만 13세 미만 아동으로부터 의도적으로 개인 정보를 수집하지 않습니다. 만 13세 미만 아동으로부터 정보를 수집했다고 생각되면 당사에 연락하십시오.</p>

<h2>귀하의 권리</h2>
<p>귀하의 위치에 따라 개인 정보에 관한 다음과 같은 권리가 있을 수 있습니다:</p>
<ul>
  <li>개인 정보에 대한 접근</li>
  <li>부정확한 정보 수정</li>
  <li>정보 삭제</li>
  <li>데이터 이동성</li>
</ul>
<p>이러한 권리를 행사하려면 <a href="/contact">문의하세요</a>.</p>

<h2>이 방침의 변경</h2>
<p>이 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 앱을 통해 또는 위의 "최종 업데이트" 날짜를 업데이트하여 중요한 변경 사항을 알려드립니다.</p>

<h2>문의하기</h2>
<p>이 개인정보 처리방침에 대해 질문이 있으시면 <a href="/contact">문의 페이지</a>를 방문하세요.</p>
`,

  'pt-BR': `
<p>Esta Política de Privacidade descreve como o Orbyt ("nós", "nos", "nosso") coleta, usa e compartilha informações quando você usa nosso aplicativo móvel ("Orbyt" ou "o App").</p>

<p><strong>Importante:</strong> O Orbyt é um aplicativo cliente de terceiros que se conecta à rede Bluesky por meio do AT Protocol. Quando você usa o Orbyt, seus dados são compartilhados com a rede descentralizada do AT Protocol. Você também deve revisar a <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Política de Privacidade do Bluesky</a> para entender como seus dados são tratados na rede deles.</p>

<h2>Informações que Coletamos</h2>

<h3>Informações do Bluesky</h3>
<p>Quando você faz login no Orbyt usando sua conta Bluesky, acessamos as seguintes informações do seu perfil Bluesky:</p>
<ul>
  <li><strong>DID (Identificador Descentralizado)</strong>: Seu identificador único no AT Protocol</li>
  <li><strong>Handle</strong>: Seu nome de usuário (ex., @nomedeusuario.bsky.social)</li>
  <li><strong>Nome de Exibição</strong>: O nome exibido no seu perfil</li>
  <li><strong>Avatar</strong>: Sua foto de perfil</li>
</ul>
<p>Usamos o sistema OAuth do Bluesky para autenticação. O Orbyt não armazena sua senha do Bluesky.</p>

<h3>Informações Armazenadas em Nossos Servidores</h3>
<p>Mantemos uma pequena quantidade de dados em nossos servidores para fornecer funcionalidades específicas do Orbyt:</p>
<ul>
  <li><strong>Cores do Perfil</strong>: Cores personalizadas de texto e fundo que você define no app</li>
  <li><strong>Data de Entrada</strong>: A data em que você usou o Orbyt pela primeira vez (para funcionalidades de usuário beta)</li>
  <li><strong>Status Beta</strong>: Se você é um usuário inicial do Orbyt</li>
</ul>
<p>Esses dados são indexados do seu registro com.getorbyt.profile no AT Protocol e são mínimos por design.</p>

<h3>Informações Armazenadas Localmente no Seu Dispositivo</h3>
<p>As seguintes informações são armazenadas apenas no seu dispositivo e não são enviadas para nossos servidores:</p>
<ul>
  <li><strong>Informações da Conta</strong>: Suas contas Bluesky salvas para troca rápida</li>
  <li><strong>Tokens OAuth</strong>: Tokens de autenticação seguros (armazenados no armazenamento seguro do dispositivo)</li>
  <li><strong>Canais Assinados</strong>: Feeds e canais nos quais você se inscreveu</li>
  <li><strong>Histórico de Visualizações</strong>: Vídeos que você assistiu (usados para filtrar seu feed "Seu Mix")</li>
  <li><strong>Preferências do App</strong>: Suas configurações e preferências de interface</li>
</ul>

<h3>Informações Compartilhadas com a Rede AT Protocol</h3>
<p>O Orbyt opera no AT Protocol, um protocolo de rede social descentralizado. Quando você usa o Orbyt, as seguintes informações são compartilhadas e armazenadas na rede AT Protocol (incluindo Bluesky e outros serviços):</p>
<ul>
  <li><strong>Conteúdo Público</strong>: Suas publicações, informações de perfil, nome de exibição, avatar, bio, curtidas, seguidores, bloqueios e outras interações sociais são públicas por design e visíveis para qualquer pessoa na rede AT Protocol.</li>
  <li><strong>Dados do Perfil Orbyt</strong>: Suas cores de perfil e canais assinados são armazenados no seu registro com.getorbyt.profile no AT Protocol.</li>
</ul>
<p>Esses dados não são controlados exclusivamente pelo Orbyt e estão sujeitos às políticas da rede AT Protocol e seus operadores, incluindo Bluesky Social, PBC.</p>

<h3>Informações Coletadas Automaticamente</h3>
<p>Quando você usa o Orbyt, podemos coletar automaticamente:</p>
<ul>
  <li><strong>Informações do Dispositivo</strong>: Tipo de dispositivo, sistema operacional e versão do app (para compatibilidade e resolução de problemas)</li>
  <li><strong>Endereço IP</strong>: Coletado por meio de solicitações de rede padrão para nossa API</li>
</ul>

<h3>Análise do Site</h3>
<p>Nosso site (getorbyt.com) usa o <strong>Cloudflare Web Analytics</strong>, um serviço de análise focado em privacidade. O Cloudflare Web Analytics:</p>
<ul>
  <li>Não usa cookies</li>
  <li>Não rastreia usuários individuais entre sites</li>
  <li>Não coleta informações pessoais</li>
  <li>Coleta apenas dados agregados e anonimizados sobre visualizações de página e desempenho</li>
</ul>
<p>Você pode saber mais sobre as práticas de privacidade da Cloudflare em <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>O aplicativo móvel Orbyt não usa nenhum serviço de análise ou rastreamento de terceiros.</strong></p>

<h2>Como Usamos Suas Informações</h2>
<p>Usamos as informações coletadas para:</p>
<ul>
  <li>Fornecer e operar o app Orbyt</li>
  <li>Permitir que você faça login com sua conta Bluesky</li>
  <li>Exibir suas cores de perfil e personalizações</li>
  <li>Mostrar conteúdo de feed personalizado com base em suas assinaturas</li>
  <li>Filtrar seu feed "Seu Mix" com base no histórico de visualizações (processado localmente)</li>
  <li>Identificar usuários beta para funcionalidades de acesso antecipado</li>
  <li>Responder a solicitações de suporte</li>
</ul>

<h2>Como Compartilhamos Suas Informações</h2>
<ul>
  <li><strong>Rede AT Protocol</strong>: Quando você usa o Orbyt, seu conteúdo público é compartilhado com a rede descentralizada AT Protocol, incluindo Bluesky e outros serviços. Este compartilhamento é necessário para o funcionamento do app.</li>
  <li><strong>Provedores de Serviços</strong>: Usamos a Cloudflare para hospedagem e distribuição de conteúdo. Eles podem processar dados em nosso nome, sujeito às suas políticas de privacidade.</li>
  <li><strong>Requisitos Legais</strong>: Podemos divulgar informações se exigido por lei ou para proteger nossos direitos e segurança.</li>
</ul>
<p>Não vendemos suas informações pessoais.</p>

<h2>Retenção de Dados</h2>
<ul>
  <li><strong>Dados do Servidor</strong>: Cores de perfil e datas de entrada são retidas enquanto sua conta Bluesky existir e tiver interagido com o Orbyt.</li>
  <li><strong>Dados Locais</strong>: Os dados armazenados no seu dispositivo permanecem até que você limpe o cache do app, exclua o app ou remova sua conta.</li>
  <li><strong>Histórico de Visualizações</strong>: Limpo automaticamente após 30 dias.</li>
</ul>

<h2>Exclusão de Dados</h2>
<p>Você pode excluir seus dados das seguintes maneiras:</p>
<ul>
  <li><strong>Dados Locais</strong>: Use "Limpar Cache" nas configurações do app, ou exclua e reinstale o app</li>
  <li><strong>Remoção de Conta</strong>: Use "Remover Conta" nas configurações do app para limpar todos os dados locais da conta</li>
  <li><strong>Dados do Servidor</strong>: <a href="/contact">Entre em contato conosco</a> para solicitar a exclusão dos seus dados no servidor</li>
</ul>

<h3>Limitações na Exclusão (AT Protocol)</h3>
<p><strong>Importante:</strong> Devido à natureza descentralizada do AT Protocol, não podemos garantir a exclusão completa dos seus dados em todos os serviços da rede. Quando você exclui conteúdo:</p>
<ul>
  <li>Faremos esforços razoáveis para remover seu conteúdo do Orbyt.</li>
  <li>Notificaremos outros serviços no AT Protocol sobre a exclusão.</li>
  <li>No entanto, não podemos controlar ou forçar outros serviços e aplicativos do AT Protocol a excluir seus dados. Algumas publicações e informações podem continuar existindo em serviços fora do nosso controle.</li>
  <li>Para solicitar a remoção de outros serviços AT Protocol, você deve contatar esses serviços diretamente.</li>
</ul>

<h2>Segurança</h2>
<p>Tomamos medidas razoáveis para proteger suas informações:</p>
<ul>
  <li>Os tokens OAuth são armazenados no armazenamento seguro do seu dispositivo (Keychain no iOS, Keystore no Android)</li>
  <li>Nossa API usa criptografia HTTPS para todas as comunicações</li>
  <li>Não armazenamos sua senha do Bluesky</li>
</ul>
<p>No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.</p>

<h2>Privacidade de Crianças</h2>
<p>O Orbyt não é destinado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se você acredita que coletamos informações de uma criança menor de 13 anos, entre em contato conosco.</p>

<h2>Seus Direitos</h2>
<p>Dependendo da sua localização, você pode ter direitos relacionados às suas informações pessoais, incluindo:</p>
<ul>
  <li>Acesso às suas informações pessoais</li>
  <li>Correção de informações imprecisas</li>
  <li>Exclusão das suas informações</li>
  <li>Portabilidade de dados</li>
</ul>
<p>Para exercer esses direitos, <a href="/contact">entre em contato conosco</a>.</p>

<h2>Alterações nesta Política</h2>
<p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas por meio do app ou atualizando a data de "Última Atualização" acima.</p>

<h2>Fale Conosco</h2>
<p>Se você tiver dúvidas sobre esta Política de Privacidade, visite nossa <a href="/contact">página de contato</a>.</p>
`,

  tr: `
<p>Bu Gizlilik Politikası, Orbyt'ın ("biz", "bize", "bizim") mobil uygulamamızı ("Orbyt" veya "Uygulama") kullandığınızda bilgileri nasıl topladığını, kullandığını ve paylaştığını açıklamaktadır.</p>

<p><strong>Önemli:</strong> Orbyt, AT Protocol aracılığıyla Bluesky ağına bağlanan bir üçüncü taraf istemci uygulamasıdır. Orbyt'ı kullandığınızda, verileriniz merkezi olmayan AT Protocol ağıyla paylaşılır. Verilerinizin bu ağda nasıl işlendiğini anlamak için <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Bluesky'nin Gizlilik Politikasını</a> da incelemeniz gerekir.</p>

<h2>Topladığımız Bilgiler</h2>

<h3>Bluesky'den Alınan Bilgiler</h3>
<p>Bluesky hesabınızla Orbyt'a giriş yaptığınızda, Bluesky profilinizden aşağıdaki bilgilere erişiriz:</p>
<ul>
  <li><strong>DID (Merkezi Olmayan Tanımlayıcı)</strong>: AT Protocol'deki benzersiz tanımlayıcınız</li>
  <li><strong>Handle</strong>: Kullanıcı adınız (ör. @kullaniciad.bsky.social)</li>
  <li><strong>Görünen Ad</strong>: Profilinizde görünen isim</li>
  <li><strong>Avatar</strong>: Profil resminiz</li>
</ul>
<p>Kimlik doğrulama için Bluesky'nin OAuth sistemini kullanırız. Orbyt, Bluesky şifrenizi saklamaz.</p>

<h3>Sunucularımızda Saklanan Bilgiler</h3>
<p>Orbyt'a özgü özellikler sunmak için sunucularımızda az miktarda veri tutarız:</p>
<ul>
  <li><strong>Profil Renkleri</strong>: Uygulamada belirlediğiniz özel metin ve arka plan renkleri</li>
  <li><strong>Katılım Tarihi</strong>: Orbyt'ı ilk kullandığınız tarih (beta kullanıcı özellikleri için)</li>
  <li><strong>Beta Durumu</strong>: Orbyt'ın erken kullanıcısı olup olmadığınız</li>
</ul>
<p>Bu veriler, AT Protocol'deki com.getorbyt.profile kaydınızdan dizinlenir ve tasarım gereği minimaldır.</p>

<h3>Cihazınızda Yerel Olarak Saklanan Bilgiler</h3>
<p>Aşağıdaki bilgiler yalnızca cihazınızda saklanır ve sunucularımıza gönderilmez:</p>
<ul>
  <li><strong>Hesap Bilgileri</strong>: Hızlı geçiş için kaydedilmiş Bluesky hesaplarınız</li>
  <li><strong>OAuth Token'ları</strong>: Güvenli kimlik doğrulama token'ları (cihazın güvenli depolama alanında saklanır)</li>
  <li><strong>Abone Olunan Kanallar</strong>: Abone olduğunuz akışlar ve kanallar</li>
  <li><strong>İzleme Geçmişi</strong>: İzlediğiniz videolar ("Karışımınız" akışını filtrelemek için kullanılır)</li>
  <li><strong>Uygulama Tercihleri</strong>: Ayarlarınız ve arayüz tercihleriniz</li>
</ul>

<h3>AT Protocol Ağıyla Paylaşılan Bilgiler</h3>
<p>Orbyt, merkezi olmayan bir sosyal ağ protokolü olan AT Protocol üzerinde çalışır. Orbyt'ı kullandığınızda, aşağıdaki bilgiler AT Protocol ağıyla (Bluesky ve diğer hizmetler dahil) paylaşılır ve burada saklanır:</p>
<ul>
  <li><strong>Genel İçerik</strong>: Gönderileriniz, profil bilgileriniz, görünen adınız, avatarınız, biyografiniz, beğenileriniz, takiplerıniz, engellemeleriniz ve diğer sosyal etkileşimler tasarım gereği herkese açıktır ve AT Protocol ağındaki herkes tarafından görülebilir.</li>
  <li><strong>Orbyt Profil Verileri</strong>: Profil renkleriniz ve abone olunan kanallarınız, AT Protocol'deki com.getorbyt.profile kaydınızda saklanır.</li>
</ul>
<p>Bu veriler yalnızca Orbyt tarafından kontrol edilmez; Bluesky Social, PBC dahil olmak üzere AT Protocol ağının ve operatörlerinin politikalarına tabidir.</p>

<h3>Otomatik Olarak Toplanan Bilgiler</h3>
<p>Orbyt'ı kullandığınızda otomatik olarak toplayabileceğimiz bilgiler:</p>
<ul>
  <li><strong>Cihaz Bilgileri</strong>: Cihaz türü, işletim sistemi ve uygulama sürümü (uyumluluk ve sorun giderme için)</li>
  <li><strong>IP Adresi</strong>: API'mize yapılan standart ağ istekleri aracılığıyla toplanır</li>
</ul>

<h3>Web Sitesi Analitiği</h3>
<p>Web sitemiz (getorbyt.com), gizlilik odaklı bir analitik hizmeti olan <strong>Cloudflare Web Analytics</strong>'i kullanmaktadır. Cloudflare Web Analytics:</p>
<ul>
  <li>Çerez kullanmaz</li>
  <li>Bireysel kullanıcıları siteler arasında takip etmez</li>
  <li>Kişisel bilgi toplamaz</li>
  <li>Yalnızca sayfa görüntülemeleri ve performans hakkında toplu, anonimleştirilmiş veriler toplar</li>
</ul>
<p>Cloudflare'in gizlilik uygulamaları hakkında daha fazla bilgiyi <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a> adresinde bulabilirsiniz.</p>

<p><strong>Orbyt mobil uygulaması herhangi bir üçüncü taraf analitik veya izleme hizmeti kullanmamaktadır.</strong></p>

<h2>Bilgilerinizi Nasıl Kullanırız</h2>
<p>Topladığımız bilgileri şu amaçlarla kullanırız:</p>
<ul>
  <li>Orbyt uygulamasını sağlamak ve çalıştırmak</li>
  <li>Bluesky hesabınızla giriş yapmanızı sağlamak</li>
  <li>Profil renklerinizi ve özelleştirmelerinizi görüntülemek</li>
  <li>Aboneliklerinize göre kişiselleştirilmiş akış içeriği göstermek</li>
  <li>"Karışımınız" akışını izleme geçmişine göre filtrelemek (yerel olarak işlenir)</li>
  <li>Erken erişim özellikleri için beta kullanıcılarını belirlemek</li>
  <li>Destek taleplerine yanıt vermek</li>
</ul>

<h2>Bilgilerinizi Nasıl Paylaşırız</h2>
<ul>
  <li><strong>AT Protocol Ağı</strong>: Orbyt'ı kullandığınızda, genel içeriğiniz Bluesky ve diğer hizmetler dahil olmak üzere merkezi olmayan AT Protocol ağıyla paylaşılır. Bu paylaşım, uygulamanın çalışması için gereklidir.</li>
  <li><strong>Hizmet Sağlayıcılar</strong>: Barındırma ve içerik dağıtımı için Cloudflare'i kullanırız. Gizlilik politikalarına tabi olarak verilerimizi bizim adımıza işleyebilirler.</li>
  <li><strong>Yasal Gereksinimler</strong>: Yasalar gerektirdiğinde veya haklarımızı ve güvenliğimizi korumak için bilgileri ifşa edebiliriz.</li>
</ul>
<p>Kişisel bilgilerinizi satmıyoruz.</p>

<h2>Veri Saklama</h2>
<ul>
  <li><strong>Sunucu Verileri</strong>: Profil renkleri ve katılım tarihleri, Bluesky hesabınız var olduğu ve Orbyt ile etkileşimde bulunduğu sürece saklanır.</li>
  <li><strong>Yerel Veriler</strong>: Cihazınızda saklanan veriler, uygulama önbelleğini temizleyene, uygulamayı silene veya hesabınızı kaldırana kadar kalır.</li>
  <li><strong>İzleme Geçmişi</strong>: 30 gün sonra otomatik olarak temizlenir.</li>
</ul>

<h2>Veri Silme</h2>
<p>Verilerinizi şu yollarla silebilirsiniz:</p>
<ul>
  <li><strong>Yerel Veriler</strong>: Uygulama ayarlarında "Önbelleği Temizle" seçeneğini kullanın veya uygulamayı silin ve yeniden yükleyin</li>
  <li><strong>Hesap Kaldırma</strong>: Tüm yerel hesap verilerini temizlemek için uygulama ayarlarında "Hesabı Kaldır" seçeneğini kullanın</li>
  <li><strong>Sunucu Verileri</strong>: Sunucu tarafındaki verilerinizin silinmesini talep etmek için <a href="/contact">bizimle iletişime geçin</a></li>
</ul>

<h3>Silme Kısıtlamaları (AT Protocol)</h3>
<p><strong>Önemli:</strong> AT Protocol'ün merkezi olmayan yapısı nedeniyle, ağdaki tüm hizmetlerde verilerinizin tamamen silineceğini garanti edemeyiz. İçerik sildiğinizde:</p>
<ul>
  <li>İçeriğinizi Orbyt'tan kaldırmak için makul çaba göstereceğiz.</li>
  <li>AT Protocol'deki diğer hizmetleri silme işlemi hakkında bilgilendireceğiz.</li>
  <li>Ancak AT Protocol'deki diğer hizmetleri ve uygulamaları verilerinizi silmeye zorlayamayız. Bazı gönderiler ve bilgiler, kontrolümüz dışındaki hizmetlerde var olmaya devam edebilir.</li>
  <li>Diğer AT Protocol hizmetlerinden kaldırılmasını talep etmek için bu hizmetlerle doğrudan iletişime geçmeniz gerekir.</li>
</ul>

<h2>Güvenlik</h2>
<p>Bilgilerinizi korumak için makul önlemler alırız:</p>
<ul>
  <li>OAuth token'ları cihazınızın güvenli depolama alanında saklanır (iOS'ta Keychain, Android'de Keystore)</li>
  <li>API'miz tüm iletişimler için HTTPS şifrelemesi kullanır</li>
  <li>Bluesky şifrenizi saklamıyoruz</li>
</ul>
<p>Ancak internet üzerinden yapılan hiçbir iletim yöntemi veya elektronik depolama %100 güvenli değildir.</p>

<h2>Çocukların Gizliliği</h2>
<p>Orbyt, 13 yaşın altındaki çocuklara yönelik değildir. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. 13 yaşın altındaki bir çocuktan bilgi topladığımıza inanıyorsanız lütfen bizimle iletişime geçin.</p>

<h2>Haklarınız</h2>
<p>Konumunuza bağlı olarak kişisel bilgilerinizle ilgili aşağıdakiler dahil çeşitli haklara sahip olabilirsiniz:</p>
<ul>
  <li>Kişisel bilgilerinize erişim</li>
  <li>Yanlış bilgilerin düzeltilmesi</li>
  <li>Bilgilerinizin silinmesi</li>
  <li>Veri taşınabilirliği</li>
</ul>
<p>Bu hakları kullanmak için <a href="/contact">bizimle iletişime geçin</a>.</p>

<h2>Bu Politikadaki Değişiklikler</h2>
<p>Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler hakkında sizi uygulama aracılığıyla veya yukarıdaki "Son Güncelleme" tarihini güncelleyerek bilgilendireceğiz.</p>

<h2>Bize Ulaşın</h2>
<p>Bu Gizlilik Politikası hakkında sorularınız varsa <a href="/contact">iletişim sayfamızı</a> ziyaret edin.</p>
`,
}

export function getPrivacyContent(locale: string): string {
  return privacyContent[locale as LocaleKey] ?? privacyContent.en
}
