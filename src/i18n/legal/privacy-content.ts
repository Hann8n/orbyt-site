type LocaleKey = 'en' | 'de' | 'es-MX' | 'es-ES' | 'es-419' | 'fr' | 'it' | 'ja' | 'ko' | 'pt-BR' | 'tr'

const privacyContent: Record<LocaleKey, string> = {
  en: `
<p>This Privacy Policy describes how Orbyt ("we", "us", "our") collects, uses, and shares information when you use our mobile application ("Orbyt" or "the App"). We are the data controller for personal data we collect directly through the App.</p>

<p><strong>AT Protocol notice:</strong> Orbyt is a third-party client that connects to the Bluesky network via the AT Protocol. When you post or interact on Orbyt, that activity occurs on the decentralized AT Protocol network. Please also review <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Bluesky's Privacy Policy</a> to understand how your data is handled on their network.</p>

<h2>The Short Version</h2>
<ul>
  <li>We collect only what we need to run the app — your Bluesky profile info, a few server-side preferences, and standard network logs.</li>
  <li>We do not sell your personal information.</li>
  <li>We do not use your data to train AI or machine-learning models.</li>
  <li>We do not use third-party advertising or tracking SDKs in the Orbyt app.</li>
  <li>Most content you post is public by design on the AT Protocol — treat it that way.</li>
  <li>You can request access, correction, deletion, or a copy of your data at any time by <a href="/contact">contacting us</a>.</li>
</ul>

<h2>Information We Collect</h2>

<h3>Information from Bluesky</h3>
<p>When you sign in to Orbyt with your Bluesky account, we access the following from your Bluesky profile:</p>
<ul>
  <li><strong>DID (Decentralized Identifier)</strong>: Your unique identifier on the AT Protocol</li>
  <li><strong>Handle</strong>: Your username (e.g., @username.bsky.social)</li>
  <li><strong>Display Name</strong>: Your profile display name</li>
  <li><strong>Avatar</strong>: Your profile picture</li>
</ul>
<p>We use Bluesky's OAuth system for authentication. Orbyt does not store your Bluesky password.</p>

<h3>Information Stored on Our Servers</h3>
<p>We store a minimal amount of data on our servers to power Orbyt-specific features:</p>
<ul>
  <li><strong>Profile Colors</strong>: Custom text and background colors you set in the app</li>
  <li><strong>Join Date</strong>: The date you first used Orbyt (to identify beta users)</li>
  <li><strong>Beta Status</strong>: Whether you are an early Orbyt user</li>
</ul>
<p>This data is indexed from your <code>com.getorbyt.profile</code> record on the AT Protocol and is intentionally minimal.</p>

<h3>Information Stored Locally on Your Device</h3>
<p>The following is stored only on your device and never sent to our servers:</p>
<ul>
  <li><strong>Account Information</strong>: Your saved Bluesky accounts for quick switching</li>
  <li><strong>OAuth Tokens</strong>: Secure authentication tokens (stored in device secure storage)</li>
  <li><strong>Subscribed Channels</strong>: Feeds and channels you've subscribed to</li>
  <li><strong>Watch History</strong>: Videos you've watched (used to filter your "Your Mix" feed, processed entirely on-device)</li>
  <li><strong>App Preferences</strong>: Your settings and UI preferences</li>
</ul>

<h3>Information Shared with the AT Protocol Network</h3>
<p>The AT Protocol is a decentralized social networking protocol where most user activity is public by design. When you use Orbyt, the following is shared with and stored on the AT Protocol network (including Bluesky and other third-party services):</p>
<ul>
  <li><strong>Public Content</strong>: Posts, profile information, display name, avatar, bio, likes, follows, blocks, and other social interactions are publicly visible to anyone on the AT Protocol network.</li>
  <li><strong>Orbyt Profile Data</strong>: Your profile colors and subscribed channels are stored in your <code>com.getorbyt.profile</code> record on the AT Protocol.</li>
</ul>
<p>This data is governed by the policies of the AT Protocol network and its operators, including Bluesky Social, PBC, not solely by Orbyt.</p>

<h3>Automatically Collected Information</h3>
<p>When you use Orbyt, we may automatically collect:</p>
<ul>
  <li><strong>Device Information</strong>: Device type, operating system, and app version (for compatibility and troubleshooting)</li>
  <li><strong>IP Address</strong>: Collected through standard network requests to our API; not retained beyond normal server log rotation</li>
</ul>

<h3>Website Analytics</h3>
<p>Our website (getorbyt.com) uses <strong>Cloudflare Web Analytics</strong>, a privacy-preserving analytics service that:</p>
<ul>
  <li>Does not use cookies</li>
  <li>Does not track individual users across sites</li>
  <li>Does not collect personal information</li>
  <li>Collects only aggregate, anonymized data about page views and performance</li>
</ul>
<p>Learn more about Cloudflare's privacy practices at <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>The Orbyt mobile app does not include any third-party analytics or advertising SDKs.</strong></p>

<h2>How We Use Your Information</h2>
<p>We process your information to:</p>
<ul>
  <li>Provide and operate the Orbyt app (<em>contract performance</em>)</li>
  <li>Enable sign-in with your Bluesky account (<em>contract performance</em>)</li>
  <li>Display your profile colors and customizations (<em>contract performance</em>)</li>
  <li>Show personalized feed content based on your subscriptions (<em>contract performance</em>)</li>
  <li>Filter your "Your Mix" feed based on watch history, processed locally on your device (<em>contract performance</em>)</li>
  <li>Identify beta users for early-access features (<em>legitimate interest</em>)</li>
  <li>Respond to support requests (<em>legitimate interest</em>)</li>
  <li>Comply with applicable law and protect Orbyt and users from harm (<em>legal obligation / legitimate interest</em>)</li>
</ul>

<h2>How We Share Your Information</h2>
<ul>
  <li><strong>AT Protocol Network</strong>: Your public content is shared with the decentralized AT Protocol network (including Bluesky and third-party apps) as a necessary part of how the protocol works.</li>
  <li><strong>Service Providers</strong>: We use Cloudflare for hosting and content delivery. Cloudflare processes data on our behalf under its privacy policy and data processing agreements.</li>
  <li><strong>Legal Requirements</strong>: We may disclose information when required by law, court order, or to protect the rights, safety, or security of Orbyt, our users, or the public. Where legally permitted, we will attempt to notify you before disclosing.</li>
  <li><strong>Business Transfers</strong>: If Orbyt is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction. We will provide notice before your personal data becomes subject to a different privacy policy.</li>
</ul>
<p>We do not sell your personal information to third parties. We do not share your personal information for third-party advertising purposes.</p>

<h2>Data Retention</h2>
<ul>
  <li><strong>Server Data</strong>: Profile colors, join date, and beta status are retained for as long as your Bluesky account is active and you have interacted with Orbyt. We delete or anonymize this data within 90 days after you request account removal or we receive notice your account has been deleted.</li>
  <li><strong>Local Data</strong>: Data on your device persists until you clear the app cache, delete the app, or remove your account.</li>
  <li><strong>Watch History</strong>: Automatically purged from your device after 30 days.</li>
  <li><strong>Server Logs</strong>: Standard access logs (including IP addresses) are rotated and deleted within 30 days unless retained longer to investigate a security incident or legal obligation.</li>
</ul>

<h2>Data Deletion</h2>
<p>You can delete your data in the following ways:</p>
<ul>
  <li><strong>Local Data</strong>: Use "Clear Cache" in app settings, or delete and reinstall the app</li>
  <li><strong>Account Removal</strong>: Use "Remove Account" in app settings to clear all local account data</li>
  <li><strong>Server Data</strong>: <a href="/contact">Contact us</a> to request deletion of your server-side data — we will complete this within 30 days</li>
</ul>

<h3>Limitations on Deletion (AT Protocol)</h3>
<p>Due to the decentralized nature of the AT Protocol, we cannot guarantee complete deletion of your data across every service on the network. When you delete content:</p>
<ul>
  <li>We will make reasonable efforts to remove your content from Orbyt.</li>
  <li>We will send deletion notifications to other services on the AT Protocol network.</li>
  <li>We cannot compel independent AT Protocol services to delete your data. Some posts may persist on services outside our control.</li>
  <li>To request removal from other AT Protocol services, contact those services directly.</li>
</ul>

<h2>International Data Transfers</h2>
<p>Orbyt is operated from the United States. If you access the App from outside the United States, your information may be transferred to and processed in the United States or other countries where our service providers operate. Where required by applicable law (e.g., the GDPR), we rely on appropriate transfer mechanisms such as Standard Contractual Clauses to safeguard cross-border data transfers.</p>

<h2>Security</h2>
<p>We use reasonable technical and organizational measures to protect your information:</p>
<ul>
  <li>OAuth tokens are stored in your device's secure storage (Keychain on iOS, Keystore on Android)</li>
  <li>Our API uses HTTPS encryption for all communications</li>
  <li>We do not store your Bluesky password</li>
</ul>
<p>No method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we will notify you of a data breach as required by applicable law.</p>

<h2>Children's Privacy</h2>
<p>Orbyt is not directed to children under 13 years of age (or the applicable minimum age in your country). We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will take steps to delete it promptly. If you believe we have collected information from a child under 13, please <a href="/contact">contact us</a>.</p>

<h2>Your Rights</h2>
<p>Depending on your location, you may have the following rights regarding your personal information:</p>
<ul>
  <li><strong>Access</strong>: Request a copy of the personal data we hold about you</li>
  <li><strong>Correction</strong>: Request correction of inaccurate or incomplete information</li>
  <li><strong>Deletion</strong>: Request deletion of your personal data (subject to legal retention obligations)</li>
  <li><strong>Portability</strong>: Receive your data in a structured, machine-readable format</li>
  <li><strong>Objection</strong>: Object to processing based on legitimate interests</li>
  <li><strong>Restriction</strong>: Request that we restrict processing of your data in certain circumstances</li>
  <li><strong>Withdraw Consent</strong>: Where processing is based on consent, withdraw it at any time without affecting prior processing</li>
</ul>
<p>To exercise any of these rights, <a href="/contact">contact us</a>. We will respond within the timeframe required by applicable law (generally 30 days). If you are located in the EEA, UK, or Switzerland, you also have the right to lodge a complaint with your local data protection authority.</p>

<h2>Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time. We will notify you of material changes through the app or by updating the "Last Updated" date at the top of this page. Your continued use of Orbyt after any changes constitutes acceptance of the updated policy.</p>

<h2>Contact Us</h2>
<p>If you have questions or requests regarding this Privacy Policy, visit our <a href="/contact">contact page</a>. For data subject access requests (DSARs), please include "Privacy Request" in your message so we can prioritize your inquiry.</p>
`,

  de: `
<p>Diese Datenschutzerklärung beschreibt, wie Orbyt („wir", „uns", „unser") Informationen erhebt, verwendet und weitergibt, wenn Sie unsere mobile Anwendung („Orbyt" oder „die App") nutzen. Wir sind der Verantwortliche für personenbezogene Daten, die wir direkt über die App erheben.</p>

<p><strong>AT-Protokoll-Hinweis:</strong> Orbyt ist ein Drittanbieter-Client, der über das AT-Protokoll eine Verbindung zum Bluesky-Netzwerk herstellt. Wenn Sie bei Orbyt Inhalte veröffentlichen oder interagieren, findet diese Aktivität im dezentralen AT-Protokoll-Netzwerk statt. Lesen Sie bitte auch die <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Datenschutzerklärung von Bluesky</a>, um zu verstehen, wie Ihre Daten in deren Netzwerk behandelt werden.</p>

<h2>Die Kurzversion</h2>
<ul>
  <li>Wir erheben nur, was wir für den Betrieb der App benötigen – Ihre Bluesky-Profilinformationen, einige serverseitige Einstellungen und Standard-Netzwerkprotokolle.</li>
  <li>Wir verkaufen Ihre personenbezogenen Daten nicht.</li>
  <li>Wir verwenden Ihre Daten nicht zum Training von KI- oder maschinellen Lernmodellen.</li>
  <li>Wir verwenden keine Analyse- oder Werbe-SDKs von Drittanbietern in der Orbyt-App.</li>
  <li>Die meisten Inhalte, die Sie im AT-Protokoll veröffentlichen, sind standardmäßig öffentlich – behandeln Sie sie entsprechend.</li>
  <li>Sie können jederzeit Zugang, Berichtigung, Löschung oder eine Kopie Ihrer Daten beantragen, indem Sie <a href="/contact">uns kontaktieren</a>.</li>
</ul>

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
<p>Diese Daten werden aus Ihrem <code>com.getorbyt.profile</code>-Datensatz im AT-Protokoll indiziert und sind bewusst minimal gehalten.</p>

<h3>Lokal auf Ihrem Gerät gespeicherte Informationen</h3>
<p>Folgende Informationen werden nur auf Ihrem Gerät gespeichert und nie an unsere Server übermittelt:</p>
<ul>
  <li><strong>Kontoinformationen</strong>: Ihre gespeicherten Bluesky-Konten für schnelles Wechseln</li>
  <li><strong>OAuth-Token</strong>: Sichere Authentifizierungstoken (gespeichert im sicheren Gerätespeicher)</li>
  <li><strong>Abonnierte Kanäle</strong>: Feeds und Kanäle, die Sie abonniert haben</li>
  <li><strong>Wiedergabeverlauf</strong>: Videos, die Sie angesehen haben (zur Filterung Ihres „Ihr Mix"-Feeds, vollständig auf dem Gerät verarbeitet)</li>
  <li><strong>App-Einstellungen</strong>: Ihre Einstellungen und UI-Präferenzen</li>
</ul>

<h3>Mit dem AT-Protokoll-Netzwerk geteilte Informationen</h3>
<p>Das AT-Protokoll ist ein dezentrales Soziales-Netzwerk-Protokoll, bei dem die meisten Nutzeraktivitäten standardmäßig öffentlich sind. Wenn Sie Orbyt nutzen, werden folgende Informationen mit dem AT-Protokoll-Netzwerk (einschließlich Bluesky und anderen Drittanbieterdiensten) geteilt und dort gespeichert:</p>
<ul>
  <li><strong>Öffentliche Inhalte</strong>: Beiträge, Profilinformationen, Anzeigename, Avatar, Bio, Likes, Follows, Blocks und andere soziale Interaktionen sind für jeden im AT-Protokoll-Netzwerk öffentlich sichtbar.</li>
  <li><strong>Orbyt-Profildaten</strong>: Ihre Profilfarben und abonnierten Kanäle sind in Ihrem <code>com.getorbyt.profile</code>-Datensatz im AT-Protokoll gespeichert.</li>
</ul>
<p>Diese Daten unterliegen den Richtlinien des AT-Protokoll-Netzwerks und seiner Betreiber, einschließlich Bluesky Social, PBC, und werden nicht ausschließlich von Orbyt kontrolliert.</p>

<h3>Automatisch erhobene Informationen</h3>
<p>Wenn Sie Orbyt nutzen, erheben wir möglicherweise automatisch:</p>
<ul>
  <li><strong>Geräteinformationen</strong>: Gerätetyp, Betriebssystem und App-Version (für Kompatibilität und Fehlerbehebung)</li>
  <li><strong>IP-Adresse</strong>: Wird durch standardmäßige Netzwerkanfragen an unsere API erhoben; wird nicht über die normale Serverprotokoll-Rotation hinaus gespeichert</li>
</ul>

<h3>Website-Analyse</h3>
<p>Unsere Website (getorbyt.com) verwendet <strong>Cloudflare Web Analytics</strong>, einen datenschutzfreundlichen Analysedienst, der:</p>
<ul>
  <li>Keine Cookies verwendet</li>
  <li>Keine einzelnen Nutzer seitenübergreifend verfolgt</li>
  <li>Keine personenbezogenen Daten erhebt</li>
  <li>Nur aggregierte, anonymisierte Daten über Seitenaufrufe und Leistung erhebt</li>
</ul>
<p>Mehr über die Datenschutzpraktiken von Cloudflare erfahren Sie unter <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>Die Orbyt-Mobile-App enthält keine Analyse- oder Werbe-SDKs von Drittanbietern.</strong></p>

<h2>Wie wir Ihre Informationen verwenden</h2>
<p>Wir verarbeiten Ihre Informationen, um:</p>
<ul>
  <li>Die Orbyt-App bereitzustellen und zu betreiben (<em>Vertragserfüllung</em>)</li>
  <li>Die Anmeldung mit Ihrem Bluesky-Konto zu ermöglichen (<em>Vertragserfüllung</em>)</li>
  <li>Ihre Profilfarben und Anpassungen anzuzeigen (<em>Vertragserfüllung</em>)</li>
  <li>Personalisierte Feed-Inhalte basierend auf Ihren Abonnements anzuzeigen (<em>Vertragserfüllung</em>)</li>
  <li>Ihren „Ihr Mix"-Feed basierend auf dem Wiedergabeverlauf zu filtern, lokal auf Ihrem Gerät verarbeitet (<em>Vertragserfüllung</em>)</li>
  <li>Beta-Nutzer für Funktionen mit frühem Zugang zu identifizieren (<em>berechtigtes Interesse</em>)</li>
  <li>Auf Support-Anfragen zu antworten (<em>berechtigtes Interesse</em>)</li>
  <li>Anwendbares Recht einzuhalten und Orbyt und Nutzer vor Schaden zu schützen (<em>rechtliche Verpflichtung / berechtigtes Interesse</em>)</li>
</ul>

<h2>Wie wir Ihre Informationen weitergeben</h2>
<ul>
  <li><strong>AT-Protokoll-Netzwerk</strong>: Ihre öffentlichen Inhalte werden mit dem dezentralen AT-Protokoll-Netzwerk (einschließlich Bluesky und Drittanbieter-Apps) als notwendiger Teil der Funktionsweise des Protokolls geteilt.</li>
  <li><strong>Dienstleister</strong>: Wir verwenden Cloudflare für Hosting und Content Delivery. Cloudflare verarbeitet Daten in unserem Namen gemäß seiner Datenschutzerklärung und Datenverarbeitungsverträgen.</li>
  <li><strong>Rechtliche Anforderungen</strong>: Wir können Informationen offenlegen, wenn dies gesetzlich vorgeschrieben, durch Gerichtsbeschluss angeordnet oder zum Schutz der Rechte, der Sicherheit von Orbyt, unseren Nutzern oder der Öffentlichkeit erforderlich ist. Soweit gesetzlich zulässig, werden wir versuchen, Sie vor der Offenlegung zu benachrichtigen.</li>
  <li><strong>Unternehmensübertragungen</strong>: Falls Orbyt an einer Fusion, Übernahme oder einem Verkauf von Vermögenswerten beteiligt ist, können Ihre Informationen als Teil dieser Transaktion übertragen werden. Wir werden Sie benachrichtigen, bevor Ihre personenbezogenen Daten einer anderen Datenschutzerklärung unterliegen.</li>
</ul>
<p>Wir verkaufen Ihre personenbezogenen Daten nicht an Dritte. Wir geben Ihre personenbezogenen Daten nicht für Werbezwecke Dritter weiter.</p>

<h2>Datenspeicherung</h2>
<ul>
  <li><strong>Serverdaten</strong>: Profilfarben, Beitrittsdatum und Beta-Status werden gespeichert, solange Ihr Bluesky-Konto aktiv ist und Sie mit Orbyt interagiert haben. Wir löschen oder anonymisieren diese Daten innerhalb von 90 Tagen, nachdem Sie die Kontoentfernung beantragt haben oder wir die Benachrichtigung erhalten, dass Ihr Konto gelöscht wurde.</li>
  <li><strong>Lokale Daten</strong>: Daten auf Ihrem Gerät bleiben erhalten, bis Sie den App-Cache leeren, die App löschen oder Ihr Konto entfernen.</li>
  <li><strong>Wiedergabeverlauf</strong>: Wird nach 30 Tagen automatisch von Ihrem Gerät gelöscht.</li>
  <li><strong>Serverprotokolle</strong>: Standard-Zugriffsprotokolle (einschließlich IP-Adressen) werden innerhalb von 30 Tagen rotiert und gelöscht, es sei denn, sie werden für die Untersuchung eines Sicherheitsvorfalls oder zur Erfüllung einer rechtlichen Verpflichtung länger aufbewahrt.</li>
</ul>

<h2>Datenlöschung</h2>
<p>Sie können Ihre Daten auf folgende Weise löschen:</p>
<ul>
  <li><strong>Lokale Daten</strong>: Verwenden Sie „Cache leeren" in den App-Einstellungen oder löschen Sie die App und installieren Sie sie neu</li>
  <li><strong>Kontoentfernung</strong>: Verwenden Sie „Konto entfernen" in den App-Einstellungen, um alle lokalen Kontodaten zu löschen</li>
  <li><strong>Serverdaten</strong>: <a href="/contact">Kontaktieren Sie uns</a>, um die Löschung Ihrer serverseitigen Daten zu beantragen – wir werden dies innerhalb von 30 Tagen abschließen</li>
</ul>

<h3>Einschränkungen bei der Löschung (AT-Protokoll)</h3>
<p>Aufgrund des dezentralen Charakters des AT-Protokolls können wir keine vollständige Löschung Ihrer Daten bei allen Diensten im Netzwerk garantieren. Wenn Sie Inhalte löschen:</p>
<ul>
  <li>Werden wir angemessene Anstrengungen unternehmen, um Ihre Inhalte aus Orbyt zu entfernen.</li>
  <li>Werden wir Löschbenachrichtigungen an andere Dienste im AT-Protokoll-Netzwerk senden.</li>
  <li>Wir können unabhängige AT-Protokoll-Dienste nicht zwingen, Ihre Daten zu löschen. Einige Beiträge können auf Diensten außerhalb unserer Kontrolle bestehen bleiben.</li>
  <li>Um die Entfernung von anderen AT-Protokoll-Diensten anzufordern, wenden Sie sich direkt an diese Dienste.</li>
</ul>

<h2>Internationale Datenübertragungen</h2>
<p>Orbyt wird aus den Vereinigten Staaten betrieben. Wenn Sie außerhalb der Vereinigten Staaten auf die App zugreifen, können Ihre Informationen in die Vereinigten Staaten oder andere Länder übertragen und dort verarbeitet werden, in denen unsere Dienstleister tätig sind. Soweit nach anwendbarem Recht erforderlich (z.B. der DSGVO) stützen wir uns auf geeignete Übertragungsmechanismen wie Standardvertragsklauseln, um grenzüberschreitende Datenübertragungen zu schützen.</p>

<h2>Sicherheit</h2>
<p>Wir verwenden angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Informationen:</p>
<ul>
  <li>OAuth-Token werden im sicheren Speicher Ihres Geräts gespeichert (Keychain auf iOS, Keystore auf Android)</li>
  <li>Unsere API verwendet HTTPS-Verschlüsselung für alle Kommunikationen</li>
  <li>Wir speichern Ihr Bluesky-Passwort nicht</li>
</ul>
<p>Keine Übertragungsmethode über das Internet oder elektronische Speicherung ist 100% sicher. Wir können absolute Sicherheit nicht garantieren, werden Sie aber im Falle einer Datenpanne entsprechend den geltenden Gesetzen benachrichtigen.</p>

<h2>Datenschutz für Kinder</h2>
<p>Orbyt richtet sich nicht an Kinder unter 13 Jahren (oder dem geltenden Mindestalter in Ihrem Land). Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn wir feststellen, dass wir solche Daten erhoben haben, werden wir Maßnahmen ergreifen, um diese umgehend zu löschen. Wenn Sie glauben, dass wir Informationen von einem Kind unter 13 Jahren erhoben haben, <a href="/contact">kontaktieren Sie uns</a> bitte.</p>

<h2>Ihre Rechte</h2>
<p>Je nach Ihrem Standort können Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten haben:</p>
<ul>
  <li><strong>Auskunft</strong>: Anforderung einer Kopie der personenbezogenen Daten, die wir über Sie gespeichert haben</li>
  <li><strong>Berichtigung</strong>: Anforderung der Korrektur ungenauer oder unvollständiger Informationen</li>
  <li><strong>Löschung</strong>: Anforderung der Löschung Ihrer personenbezogenen Daten (vorbehaltlich gesetzlicher Aufbewahrungspflichten)</li>
  <li><strong>Datenportabilität</strong>: Erhalt Ihrer Daten in einem strukturierten, maschinenlesbaren Format</li>
  <li><strong>Widerspruch</strong>: Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen</li>
  <li><strong>Einschränkung</strong>: Anforderung der Einschränkung der Verarbeitung Ihrer Daten unter bestimmten Umständen</li>
  <li><strong>Einwilligung widerrufen</strong>: Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit ohne Auswirkung auf die bisherige Verarbeitung widerrufen</li>
</ul>
<p>Um diese Rechte auszuüben, <a href="/contact">kontaktieren Sie uns</a>. Wir werden innerhalb der nach anwendbarem Recht vorgeschriebenen Frist antworten (in der Regel 30 Tage). Wenn Sie sich im EWR, im Vereinigten Königreich oder in der Schweiz befinden, haben Sie auch das Recht, eine Beschwerde bei Ihrer lokalen Datenschutzbehörde einzureichen.</p>

<h2>Änderungen an dieser Erklärung</h2>
<p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen durch die App oder durch Aktualisierung des Datums „Zuletzt aktualisiert" oben auf dieser Seite informieren. Ihre fortgesetzte Nutzung von Orbyt nach Änderungen gilt als Zustimmung zur aktualisierten Erklärung.</p>

<h2>Kontaktieren Sie uns</h2>
<p>Wenn Sie Fragen oder Anfragen zu dieser Datenschutzerklärung haben, besuchen Sie unsere <a href="/contact">Kontaktseite</a>. Für Anfragen betroffener Personen geben Sie bitte „Datenschutzanfrage" in Ihrer Nachricht an, damit wir Ihre Anfrage priorisieren können.</p>
`,

  'es-419': `
<p>Esta Política de Privacidad describe cómo Orbyt ("nosotros", "nos", "nuestro") recopila, usa y comparte información cuando utilizas nuestra aplicación móvil ("Orbyt" o "la App"). Somos el responsable del tratamiento de los datos personales que recopilamos directamente a través de la App.</p>

<p><strong>Aviso sobre el AT Protocol:</strong> Orbyt es un cliente de terceros que se conecta a la red Bluesky a través del AT Protocol. Cuando publicas o interactúas en Orbyt, esa actividad ocurre en la red descentralizada del AT Protocol. También debes revisar la <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Política de Privacidad de Bluesky</a> para entender cómo se manejan tus datos en su red.</p>

<h2>La Versión Corta</h2>
<ul>
  <li>Recopilamos solo lo necesario para operar la app: tu información de perfil de Bluesky, algunas preferencias en el servidor y registros de red estándar.</li>
  <li>No vendemos tu información personal.</li>
  <li>No usamos tus datos para entrenar modelos de IA o aprendizaje automático.</li>
  <li>No usamos SDKs de publicidad o seguimiento de terceros en la app de Orbyt.</li>
  <li>La mayoría del contenido que publicas en el AT Protocol es público por diseño — trátalo como tal.</li>
  <li>Puedes solicitar acceso, corrección, eliminación o una copia de tus datos en cualquier momento <a href="/contact">contactándonos</a>.</li>
</ul>

<h2>Información que Recopilamos</h2>

<h3>Información de Bluesky</h3>
<p>Cuando inicias sesión en Orbyt con tu cuenta de Bluesky, accedemos a lo siguiente de tu perfil de Bluesky:</p>
<ul>
  <li><strong>DID (Identificador Descentralizado)</strong>: Tu identificador único en el AT Protocol</li>
  <li><strong>Handle</strong>: Tu nombre de usuario (ej., @usuario.bsky.social)</li>
  <li><strong>Nombre para Mostrar</strong>: El nombre que aparece en tu perfil</li>
  <li><strong>Avatar</strong>: Tu foto de perfil</li>
</ul>
<p>Usamos el sistema OAuth de Bluesky para la autenticación. Orbyt no almacena tu contraseña de Bluesky.</p>

<h3>Información Almacenada en Nuestros Servidores</h3>
<p>Almacenamos una cantidad mínima de datos en nuestros servidores para potenciar las funciones específicas de Orbyt:</p>
<ul>
  <li><strong>Colores de Perfil</strong>: Colores personalizados de texto y fondo que configuras en la app</li>
  <li><strong>Fecha de Registro</strong>: La fecha en que usaste Orbyt por primera vez (para identificar usuarios beta)</li>
  <li><strong>Estado Beta</strong>: Si eres un usuario temprano de Orbyt</li>
</ul>
<p>Estos datos se indexan de tu registro <code>com.getorbyt.profile</code> en el AT Protocol y son intencionalmente mínimos.</p>

<h3>Información Almacenada Localmente en tu Dispositivo</h3>
<p>Lo siguiente se almacena solo en tu dispositivo y nunca se envía a nuestros servidores:</p>
<ul>
  <li><strong>Información de Cuenta</strong>: Tus cuentas de Bluesky guardadas para cambio rápido</li>
  <li><strong>Tokens OAuth</strong>: Tokens de autenticación seguros (almacenados en el almacenamiento seguro del dispositivo)</li>
  <li><strong>Canales Suscritos</strong>: Feeds y canales a los que te has suscrito</li>
  <li><strong>Historial de Reproducción</strong>: Videos que has visto (usados para filtrar tu feed "Tu Mezcla", procesado completamente en el dispositivo)</li>
  <li><strong>Preferencias de la App</strong>: Tu configuración y preferencias de interfaz</li>
</ul>

<h3>Información Compartida con la Red del AT Protocol</h3>
<p>El AT Protocol es un protocolo de red social descentralizado donde la mayoría de la actividad de los usuarios es pública por diseño. Cuando usas Orbyt, lo siguiente se comparte y almacena en la red del AT Protocol (incluidos Bluesky y otros servicios de terceros):</p>
<ul>
  <li><strong>Contenido Público</strong>: Publicaciones, información de perfil, nombre para mostrar, avatar, bio, "me gusta", seguidores, bloqueos y otras interacciones sociales son públicamente visibles para cualquiera en la red del AT Protocol.</li>
  <li><strong>Datos del Perfil de Orbyt</strong>: Tus colores de perfil y canales suscritos se almacenan en tu registro <code>com.getorbyt.profile</code> en el AT Protocol.</li>
</ul>
<p>Estos datos están regidos por las políticas de la red del AT Protocol y sus operadores, incluido Bluesky Social, PBC, no únicamente por Orbyt.</p>

<h3>Información Recopilada Automáticamente</h3>
<p>Cuando usas Orbyt, podemos recopilar automáticamente:</p>
<ul>
  <li><strong>Información del Dispositivo</strong>: Tipo de dispositivo, sistema operativo y versión de la app (para compatibilidad y resolución de problemas)</li>
  <li><strong>Dirección IP</strong>: Recopilada a través de solicitudes de red estándar a nuestra API; no se conserva más allá de la rotación normal de registros del servidor</li>
</ul>

<h3>Análisis del Sitio Web</h3>
<p>Nuestro sitio web (getorbyt.com) usa <strong>Cloudflare Web Analytics</strong>, un servicio de análisis que preserva la privacidad y que:</p>
<ul>
  <li>No usa cookies</li>
  <li>No rastrea usuarios individuales entre sitios</li>
  <li>No recopila información personal</li>
  <li>Recopila solo datos agregados y anonimizados sobre vistas de página y rendimiento</li>
</ul>
<p>Más información sobre las prácticas de privacidad de Cloudflare en <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>La app móvil de Orbyt no incluye SDKs de análisis ni publicidad de terceros.</strong></p>

<h2>Cómo Usamos tu Información</h2>
<p>Procesamos tu información para:</p>
<ul>
  <li>Proporcionar y operar la app de Orbyt (<em>ejecución del contrato</em>)</li>
  <li>Permitir el inicio de sesión con tu cuenta de Bluesky (<em>ejecución del contrato</em>)</li>
  <li>Mostrar tus colores de perfil y personalizaciones (<em>ejecución del contrato</em>)</li>
  <li>Mostrar contenido de feed personalizado según tus suscripciones (<em>ejecución del contrato</em>)</li>
  <li>Filtrar tu feed "Tu Mezcla" según el historial de reproducción, procesado localmente en tu dispositivo (<em>ejecución del contrato</em>)</li>
  <li>Identificar usuarios beta para funciones de acceso anticipado (<em>interés legítimo</em>)</li>
  <li>Responder solicitudes de soporte (<em>interés legítimo</em>)</li>
  <li>Cumplir con la ley aplicable y proteger a Orbyt y a los usuarios de daños (<em>obligación legal / interés legítimo</em>)</li>
</ul>

<h2>Cómo Compartimos tu Información</h2>
<ul>
  <li><strong>Red del AT Protocol</strong>: Tu contenido público se comparte con la red descentralizada del AT Protocol (incluidos Bluesky y apps de terceros) como parte necesaria del funcionamiento del protocolo.</li>
  <li><strong>Proveedores de Servicios</strong>: Usamos Cloudflare para alojamiento y entrega de contenido. Cloudflare procesa datos en nuestro nombre bajo su política de privacidad y acuerdos de procesamiento de datos.</li>
  <li><strong>Requisitos Legales</strong>: Podemos divulgar información cuando lo exija la ley, una orden judicial, o para proteger los derechos, la seguridad de Orbyt, nuestros usuarios o el público. Donde lo permita la ley, intentaremos notificarte antes de divulgar.</li>
  <li><strong>Transferencias Empresariales</strong>: Si Orbyt participa en una fusión, adquisición o venta de activos, tu información puede transferirse como parte de esa transacción. Te notificaremos antes de que tus datos personales queden sujetos a una política de privacidad diferente.</li>
</ul>
<p>No vendemos tu información personal a terceros. No compartimos tu información personal con fines publicitarios de terceros.</p>

<h2>Retención de Datos</h2>
<ul>
  <li><strong>Datos del Servidor</strong>: Los colores de perfil, la fecha de registro y el estado beta se conservan mientras tu cuenta de Bluesky esté activa y hayas interactuado con Orbyt. Eliminamos o anonimizamos estos datos en un plazo de 90 días después de que solicites la eliminación de la cuenta o recibamos aviso de que tu cuenta fue eliminada.</li>
  <li><strong>Datos Locales</strong>: Los datos en tu dispositivo persisten hasta que borres la caché de la app, elimines la app o elimines tu cuenta.</li>
  <li><strong>Historial de Reproducción</strong>: Se elimina automáticamente de tu dispositivo después de 30 días.</li>
  <li><strong>Registros del Servidor</strong>: Los registros de acceso estándar (incluidas las direcciones IP) se rotan y eliminan en un plazo de 30 días, a menos que se conserven más tiempo para investigar un incidente de seguridad u obligación legal.</li>
</ul>

<h2>Eliminación de Datos</h2>
<p>Puedes eliminar tus datos de las siguientes maneras:</p>
<ul>
  <li><strong>Datos Locales</strong>: Usa "Borrar Caché" en la configuración de la app, o elimina y reinstala la app</li>
  <li><strong>Eliminación de Cuenta</strong>: Usa "Eliminar Cuenta" en la configuración de la app para borrar todos los datos locales de la cuenta</li>
  <li><strong>Datos del Servidor</strong>: <a href="/contact">Contáctanos</a> para solicitar la eliminación de tus datos en el servidor — lo completaremos en un plazo de 30 días</li>
</ul>

<h3>Limitaciones en la Eliminación (AT Protocol)</h3>
<p>Debido a la naturaleza descentralizada del AT Protocol, no podemos garantizar la eliminación completa de tus datos en todos los servicios de la red. Cuando eliminas contenido:</p>
<ul>
  <li>Haremos esfuerzos razonables para eliminar tu contenido de Orbyt.</li>
  <li>Enviaremos notificaciones de eliminación a otros servicios en la red del AT Protocol.</li>
  <li>No podemos obligar a servicios independientes del AT Protocol a eliminar tus datos. Algunas publicaciones pueden persistir en servicios fuera de nuestro control.</li>
  <li>Para solicitar la eliminación de otros servicios del AT Protocol, contacta esos servicios directamente.</li>
</ul>

<h2>Transferencias Internacionales de Datos</h2>
<p>Orbyt opera desde los Estados Unidos. Si accedes a la App desde fuera de los Estados Unidos, tu información puede transferirse y procesarse en los Estados Unidos u otros países donde operan nuestros proveedores de servicios. Donde lo exija la ley aplicable (p. ej., el RGPD), nos apoyamos en mecanismos de transferencia adecuados como las Cláusulas Contractuales Estándar para proteger las transferencias de datos transfronterizas.</p>

<h2>Seguridad</h2>
<p>Usamos medidas técnicas y organizativas razonables para proteger tu información:</p>
<ul>
  <li>Los tokens OAuth se almacenan en el almacenamiento seguro de tu dispositivo (Keychain en iOS, Keystore en Android)</li>
  <li>Nuestra API usa cifrado HTTPS para todas las comunicaciones</li>
  <li>No almacenamos tu contraseña de Bluesky</li>
</ul>
<p>Ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro. No podemos garantizar la seguridad absoluta, pero te notificaremos sobre una brecha de datos según lo requiera la ley aplicable.</p>

<h2>Privacidad de los Menores</h2>
<p>Orbyt no está destinado a niños menores de 13 años (o la edad mínima aplicable en tu país). No recopilamos conscientemente información personal de niños menores de 13 años. Si descubrimos que hemos recopilado dicha información, tomaremos medidas para eliminarla de inmediato. Si crees que hemos recopilado información de un niño menor de 13 años, <a href="/contact">contáctanos</a>.</p>

<h2>Tus Derechos</h2>
<p>Según tu ubicación, puedes tener los siguientes derechos sobre tu información personal:</p>
<ul>
  <li><strong>Acceso</strong>: Solicitar una copia de los datos personales que tenemos sobre ti</li>
  <li><strong>Corrección</strong>: Solicitar la corrección de información inexacta o incompleta</li>
  <li><strong>Eliminación</strong>: Solicitar la eliminación de tus datos personales (sujeto a obligaciones legales de conservación)</li>
  <li><strong>Portabilidad</strong>: Recibir tus datos en un formato estructurado y legible por máquina</li>
  <li><strong>Oposición</strong>: Oponerte al procesamiento basado en intereses legítimos</li>
  <li><strong>Restricción</strong>: Solicitar que restrinjamos el procesamiento de tus datos en ciertas circunstancias</li>
  <li><strong>Retirar el Consentimiento</strong>: Donde el procesamiento se base en el consentimiento, retirarlo en cualquier momento sin afectar el procesamiento previo</li>
</ul>
<p>Para ejercer cualquiera de estos derechos, <a href="/contact">contáctanos</a>. Responderemos en el plazo requerido por la ley aplicable (generalmente 30 días). Si te encuentras en el EEE, el Reino Unido o Suiza, también tienes el derecho de presentar una queja ante tu autoridad local de protección de datos.</p>

<h2>Cambios a esta Política</h2>
<p>Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cambios materiales a través de la app o actualizando la fecha de "Última Actualización" en la parte superior de esta página. Tu uso continuo de Orbyt después de cualquier cambio constituye la aceptación de la política actualizada.</p>

<h2>Contáctanos</h2>
<p>Si tienes preguntas o solicitudes sobre esta Política de Privacidad, visita nuestra <a href="/contact">página de contacto</a>. Para solicitudes de acceso de sujetos de datos, incluye "Solicitud de Privacidad" en tu mensaje para que podamos priorizar tu consulta.</p>
`,

  'es-ES': `
<p>Esta Política de Privacidad describe cómo Orbyt ("nosotros", "nos", "nuestro") recopila, utiliza y comparte información cuando utilizas nuestra aplicación móvil ("Orbyt" o "la App"). Somos el responsable del tratamiento de los datos personales que recopilamos directamente a través de la App.</p>

<p><strong>Aviso sobre el AT Protocol:</strong> Orbyt es un cliente de terceros que se conecta a la red Bluesky a través del AT Protocol. Cuando publicas o interactúas en Orbyt, esa actividad ocurre en la red descentralizada del AT Protocol. Te recomendamos también revisar la <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Política de Privacidad de Bluesky</a> para entender cómo se tratan tus datos en su red.</p>

<h2>La Versión Breve</h2>
<ul>
  <li>Recopilamos solo lo necesario para operar la app: tu información de perfil de Bluesky, algunas preferencias en el servidor y registros de red estándar.</li>
  <li>No vendemos tu información personal.</li>
  <li>No utilizamos tus datos para entrenar modelos de IA o aprendizaje automático.</li>
  <li>No utilizamos SDKs de publicidad ni de seguimiento de terceros en la app de Orbyt.</li>
  <li>La mayoría del contenido que publicas en el AT Protocol es público por diseño — trátalo como tal.</li>
  <li>Puedes solicitar acceso, rectificación, supresión o una copia de tus datos en cualquier momento <a href="/contact">contactándonos</a>.</li>
</ul>

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
<p>Estos datos se indexan de tu registro <code>com.getorbyt.profile</code> en el AT Protocol y son intencionalmente mínimos.</p>

<h3>Información Almacenada Localmente en tu Dispositivo</h3>
<p>Lo siguiente se almacena únicamente en tu dispositivo y nunca se envía a nuestros servidores:</p>
<ul>
  <li><strong>Información de Cuenta</strong>: Tus cuentas de Bluesky guardadas para cambio rápido</li>
  <li><strong>Tokens OAuth</strong>: Tokens de autenticación seguros (almacenados en el almacenamiento seguro del dispositivo)</li>
  <li><strong>Canales Suscritos</strong>: Feeds y canales a los que te has suscrito</li>
  <li><strong>Historial de Reproducción</strong>: Vídeos que has visto (utilizados para filtrar tu feed "Tu Mezcla", procesado completamente en el dispositivo)</li>
  <li><strong>Preferencias de la App</strong>: Tu configuración y preferencias de interfaz</li>
</ul>

<h3>Información Compartida con la Red del AT Protocol</h3>
<p>El AT Protocol es un protocolo de red social descentralizado donde la mayoría de la actividad de los usuarios es pública por diseño. Cuando utilizas Orbyt, lo siguiente se comparte y almacena en la red del AT Protocol (incluidos Bluesky y otros servicios de terceros):</p>
<ul>
  <li><strong>Contenido Público</strong>: Publicaciones, información de perfil, nombre para mostrar, avatar, bio, "me gusta", seguidores, bloqueos y otras interacciones sociales son públicamente visibles para cualquiera en la red del AT Protocol.</li>
  <li><strong>Datos del Perfil de Orbyt</strong>: Tus colores de perfil y canales suscritos se almacenan en tu registro <code>com.getorbyt.profile</code> en el AT Protocol.</li>
</ul>
<p>Estos datos están regidos por las políticas de la red del AT Protocol y sus operadores, incluido Bluesky Social, PBC, no únicamente por Orbyt.</p>

<h3>Información Recopilada Automáticamente</h3>
<p>Cuando utilizas Orbyt, podemos recopilar automáticamente:</p>
<ul>
  <li><strong>Información del Dispositivo</strong>: Tipo de dispositivo, sistema operativo y versión de la app (para compatibilidad y resolución de problemas)</li>
  <li><strong>Dirección IP</strong>: Recopilada a través de solicitudes de red estándar a nuestra API; no se conserva más allá de la rotación normal de registros del servidor</li>
</ul>

<h3>Análisis del Sitio Web</h3>
<p>Nuestro sitio web (getorbyt.com) utiliza <strong>Cloudflare Web Analytics</strong>, un servicio de análisis que preserva la privacidad y que:</p>
<ul>
  <li>No utiliza cookies</li>
  <li>No rastrea usuarios individuales entre sitios</li>
  <li>No recopila información personal</li>
  <li>Recopila solo datos agregados y anonimizados sobre visitas de página y rendimiento</li>
</ul>
<p>Más información sobre las prácticas de privacidad de Cloudflare en <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>La app móvil de Orbyt no incluye SDKs de análisis ni publicidad de terceros.</strong></p>

<h2>Cómo Utilizamos tu Información</h2>
<p>Tratamos tu información para:</p>
<ul>
  <li>Proporcionar y operar la app de Orbyt (<em>ejecución del contrato</em>)</li>
  <li>Permitir el inicio de sesión con tu cuenta de Bluesky (<em>ejecución del contrato</em>)</li>
  <li>Mostrar tus colores de perfil y personalizaciones (<em>ejecución del contrato</em>)</li>
  <li>Mostrar contenido de feed personalizado según tus suscripciones (<em>ejecución del contrato</em>)</li>
  <li>Filtrar tu feed "Tu Mezcla" según el historial de reproducción, procesado localmente en tu dispositivo (<em>ejecución del contrato</em>)</li>
  <li>Identificar usuarios beta para funciones de acceso anticipado (<em>interés legítimo</em>)</li>
  <li>Responder solicitudes de asistencia (<em>interés legítimo</em>)</li>
  <li>Cumplir con la legislación aplicable y proteger a Orbyt y a los usuarios de daños (<em>obligación legal / interés legítimo</em>)</li>
</ul>

<h2>Cómo Compartimos tu Información</h2>
<ul>
  <li><strong>Red del AT Protocol</strong>: Tu contenido público se comparte con la red descentralizada del AT Protocol (incluidos Bluesky y apps de terceros) como parte necesaria del funcionamiento del protocolo.</li>
  <li><strong>Proveedores de Servicios</strong>: Utilizamos Cloudflare para alojamiento y entrega de contenido. Cloudflare trata datos en nuestro nombre bajo su política de privacidad y acuerdos de tratamiento de datos.</li>
  <li><strong>Requisitos Legales</strong>: Podemos divulgar información cuando lo exija la ley, una resolución judicial, o para proteger los derechos, la seguridad de Orbyt, nuestros usuarios o el público. Donde lo permita la legislación, intentaremos notificarte antes de divulgar.</li>
  <li><strong>Transmisiones Empresariales</strong>: Si Orbyt participa en una fusión, adquisición o venta de activos, tu información puede transferirse como parte de esa transacción. Te notificaremos antes de que tus datos personales queden sujetos a una política de privacidad diferente.</li>
</ul>
<p>No vendemos tu información personal a terceros. No compartimos tu información personal con fines publicitarios de terceros.</p>

<h2>Retención de Datos</h2>
<ul>
  <li><strong>Datos del Servidor</strong>: Los colores de perfil, la fecha de registro y el estado beta se conservan mientras tu cuenta de Bluesky esté activa y hayas interactuado con Orbyt. Eliminamos o anonimizamos estos datos en un plazo de 90 días desde que solicitas la eliminación de la cuenta o recibimos aviso de que fue eliminada.</li>
  <li><strong>Datos Locales</strong>: Los datos en tu dispositivo persisten hasta que borres la caché de la app, elimines la app o elimines tu cuenta.</li>
  <li><strong>Historial de Reproducción</strong>: Se elimina automáticamente de tu dispositivo después de 30 días.</li>
  <li><strong>Registros del Servidor</strong>: Los registros de acceso estándar (incluidas las direcciones IP) se rotan y eliminan en un plazo de 30 días, salvo que deban conservarse más tiempo para investigar un incidente de seguridad u obligación legal.</li>
</ul>

<h2>Eliminación de Datos</h2>
<p>Puedes eliminar tus datos de las siguientes maneras:</p>
<ul>
  <li><strong>Datos Locales</strong>: Utiliza "Borrar Caché" en la configuración de la app, o elimina y reinstala la app</li>
  <li><strong>Eliminación de Cuenta</strong>: Utiliza "Eliminar Cuenta" en la configuración de la app para borrar todos los datos locales de la cuenta</li>
  <li><strong>Datos del Servidor</strong>: <a href="/contact">Contáctanos</a> para solicitar la supresión de tus datos en el servidor — lo completaremos en un plazo de 30 días</li>
</ul>

<h3>Limitaciones en la Eliminación (AT Protocol)</h3>
<p>Debido a la naturaleza descentralizada del AT Protocol, no podemos garantizar la supresión completa de tus datos en todos los servicios de la red. Cuando eliminas contenido:</p>
<ul>
  <li>Haremos esfuerzos razonables para eliminar tu contenido de Orbyt.</li>
  <li>Enviaremos notificaciones de supresión a otros servicios en la red del AT Protocol.</li>
  <li>No podemos obligar a servicios independientes del AT Protocol a suprimir tus datos. Algunas publicaciones pueden persistir en servicios fuera de nuestro control.</li>
  <li>Para solicitar la eliminación de otros servicios del AT Protocol, contacta esos servicios directamente.</li>
</ul>

<h2>Transferencias Internacionales de Datos</h2>
<p>Orbyt opera desde los Estados Unidos. Si accedes a la App desde fuera de los Estados Unidos, tu información puede transferirse y tratarse en los Estados Unidos u otros países donde operan nuestros proveedores de servicios. Cuando lo exija la legislación aplicable (p. ej., el RGPD), nos apoyamos en mecanismos de transferencia adecuados, como las Cláusulas Contractuales Tipo, para proteger las transferencias de datos transfronterizas.</p>

<h2>Seguridad</h2>
<p>Utilizamos medidas técnicas y organizativas razonables para proteger tu información:</p>
<ul>
  <li>Los tokens OAuth se almacenan en el almacenamiento seguro de tu dispositivo (Keychain en iOS, Keystore en Android)</li>
  <li>Nuestra API utiliza cifrado HTTPS para todas las comunicaciones</li>
  <li>No almacenamos tu contraseña de Bluesky</li>
</ul>
<p>Ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro. No podemos garantizar la seguridad absoluta, pero te notificaremos sobre una brecha de seguridad según lo exija la legislación aplicable.</p>

<h2>Privacidad de los Menores</h2>
<p>Orbyt no está destinado a menores de 13 años (o la edad mínima aplicable en tu país). No recopilamos conscientemente información personal de menores de 13 años. Si descubrimos que hemos recopilado dicha información, tomaremos medidas para suprimirla de inmediato. Si crees que hemos recopilado información de un menor de 13 años, <a href="/contact">contáctanos</a>.</p>

<h2>Tus Derechos</h2>
<p>Según tu ubicación, puedes tener los siguientes derechos sobre tu información personal:</p>
<ul>
  <li><strong>Acceso</strong>: Solicitar una copia de los datos personales que tenemos sobre ti</li>
  <li><strong>Rectificación</strong>: Solicitar la corrección de información inexacta o incompleta</li>
  <li><strong>Supresión</strong>: Solicitar la supresión de tus datos personales (sujeto a obligaciones legales de conservación)</li>
  <li><strong>Portabilidad</strong>: Recibir tus datos en un formato estructurado y legible por máquina</li>
  <li><strong>Oposición</strong>: Oponerte al tratamiento basado en intereses legítimos</li>
  <li><strong>Limitación</strong>: Solicitar que limitemos el tratamiento de tus datos en determinadas circunstancias</li>
  <li><strong>Retirar el Consentimiento</strong>: Donde el tratamiento se base en el consentimiento, retirarlo en cualquier momento sin que afecte al tratamiento previo</li>
</ul>
<p>Para ejercer cualquiera de estos derechos, <a href="/contact">contáctanos</a>. Responderemos en el plazo exigido por la legislación aplicable (generalmente 30 días). Si te encuentras en el EEE, el Reino Unido o Suiza, también tienes derecho a presentar una reclamación ante tu autoridad de control local.</p>

<h2>Cambios a esta Política</h2>
<p>Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cambios materiales a través de la app o actualizando la fecha de "Última actualización" en la parte superior de esta página. El uso continuado de Orbyt tras cualquier cambio constituye la aceptación de la política actualizada.</p>

<h2>Contacto</h2>
<p>Si tienes preguntas o solicitudes sobre esta Política de Privacidad, visita nuestra <a href="/contact">página de contacto</a>. Para solicitudes de ejercicio de derechos, incluye "Solicitud de Privacidad" en tu mensaje para que podamos dar prioridad a tu consulta.</p>
`,

  'es-MX': `
<p>Esta Política de Privacidad describe cómo Orbyt ("nosotros", "nos", "nuestro") recopila, usa y comparte información cuando usas nuestra aplicación móvil ("Orbyt" o "la App"). Somos el responsable del tratamiento de los datos personales que recopilamos directamente a través de la App.</p>

<p><strong>Aviso sobre el AT Protocol:</strong> Orbyt es un cliente de terceros que se conecta a la red Bluesky a través del AT Protocol. Cuando publicas o interactúas en Orbyt, esa actividad ocurre en la red descentralizada del AT Protocol. También debes revisar la <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Política de Privacidad de Bluesky</a> para entender cómo se manejan tus datos en su red.</p>

<h2>La Versión Corta</h2>
<ul>
  <li>Recopilamos solo lo necesario para operar la app: tu información de perfil de Bluesky, algunas preferencias en el servidor y registros de red estándar.</li>
  <li>No vendemos tu información personal.</li>
  <li>No usamos tus datos para entrenar modelos de IA o aprendizaje automático.</li>
  <li>No usamos SDKs de publicidad o rastreo de terceros en la app de Orbyt.</li>
  <li>La mayoría del contenido que publicas en el AT Protocol es público por diseño — trátalo como tal.</li>
  <li>Puedes solicitar acceso, corrección, eliminación o una copia de tus datos en cualquier momento <a href="/contact">contactándonos</a>.</li>
</ul>

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
<p>Estos datos se indexan de tu registro <code>com.getorbyt.profile</code> en el AT Protocol y son intencionalmente mínimos.</p>

<h3>Información Almacenada Localmente en tu Dispositivo</h3>
<p>Lo siguiente se almacena únicamente en tu dispositivo y nunca se envía a nuestros servidores:</p>
<ul>
  <li><strong>Información de Cuenta</strong>: Tus cuentas de Bluesky guardadas para cambio rápido</li>
  <li><strong>Tokens OAuth</strong>: Tokens de autenticación seguros (almacenados en el almacenamiento seguro del dispositivo)</li>
  <li><strong>Canales Suscritos</strong>: Feeds y canales a los que te has suscrito</li>
  <li><strong>Historial de Reproducción</strong>: Videos que has visto (usados para filtrar tu feed "Tu Mezcla", procesado completamente en el dispositivo)</li>
  <li><strong>Preferencias de la App</strong>: Tu configuración y preferencias de interfaz</li>
</ul>

<h3>Información Compartida con la Red del AT Protocol</h3>
<p>El AT Protocol es un protocolo de red social descentralizado donde la mayoría de la actividad de los usuarios es pública por diseño. Cuando usas Orbyt, lo siguiente se comparte y almacena en la red del AT Protocol (incluyendo Bluesky y otros servicios de terceros):</p>
<ul>
  <li><strong>Contenido Público</strong>: Publicaciones, información de perfil, nombre de pantalla, avatar, bio, "me gusta", seguidores, bloqueos y otras interacciones sociales son públicamente visibles para cualquiera en la red del AT Protocol.</li>
  <li><strong>Datos del Perfil de Orbyt</strong>: Tus colores de perfil y canales suscritos se almacenan en tu registro <code>com.getorbyt.profile</code> en el AT Protocol.</li>
</ul>
<p>Estos datos están regidos por las políticas de la red del AT Protocol y sus operadores, incluyendo Bluesky Social, PBC, no únicamente por Orbyt.</p>

<h3>Información Recopilada Automáticamente</h3>
<p>Cuando usas Orbyt, podemos recopilar automáticamente:</p>
<ul>
  <li><strong>Información del Dispositivo</strong>: Tipo de dispositivo, sistema operativo y versión de la app (para compatibilidad y solución de problemas)</li>
  <li><strong>Dirección IP</strong>: Recopilada a través de solicitudes de red estándar a nuestra API; no se conserva más allá de la rotación normal de registros del servidor</li>
</ul>

<h3>Analíticas del Sitio Web</h3>
<p>Nuestro sitio web (getorbyt.com) usa <strong>Cloudflare Web Analytics</strong>, un servicio de analíticas que preserva la privacidad y que:</p>
<ul>
  <li>No usa cookies</li>
  <li>No rastrea usuarios individuales entre sitios</li>
  <li>No recopila información personal</li>
  <li>Recopila solo datos agregados y anonimizados sobre visitas de página y rendimiento</li>
</ul>
<p>Más información sobre las prácticas de privacidad de Cloudflare en <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>La app móvil de Orbyt no incluye SDKs de analíticas ni publicidad de terceros.</strong></p>

<h2>Cómo Usamos tu Información</h2>
<p>Procesamos tu información para:</p>
<ul>
  <li>Proporcionar y operar la app de Orbyt (<em>ejecución del contrato</em>)</li>
  <li>Permitir el inicio de sesión con tu cuenta de Bluesky (<em>ejecución del contrato</em>)</li>
  <li>Mostrar tus colores de perfil y personalizaciones (<em>ejecución del contrato</em>)</li>
  <li>Mostrar contenido de feed personalizado según tus suscripciones (<em>ejecución del contrato</em>)</li>
  <li>Filtrar tu feed "Tu Mezcla" según el historial de reproducción, procesado localmente en tu dispositivo (<em>ejecución del contrato</em>)</li>
  <li>Identificar usuarios beta para funciones de acceso anticipado (<em>interés legítimo</em>)</li>
  <li>Responder solicitudes de soporte (<em>interés legítimo</em>)</li>
  <li>Cumplir con la ley aplicable y proteger a Orbyt y a los usuarios de daños (<em>obligación legal / interés legítimo</em>)</li>
</ul>

<h2>Cómo Compartimos tu Información</h2>
<ul>
  <li><strong>Red del AT Protocol</strong>: Tu contenido público se comparte con la red descentralizada del AT Protocol (incluyendo Bluesky y apps de terceros) como parte necesaria del funcionamiento del protocolo.</li>
  <li><strong>Proveedores de Servicios</strong>: Usamos Cloudflare para alojamiento y entrega de contenido. Cloudflare procesa datos en nuestro nombre bajo su política de privacidad y acuerdos de procesamiento de datos.</li>
  <li><strong>Requisitos Legales</strong>: Podemos divulgar información cuando lo exija la ley, una orden judicial, o para proteger los derechos, la seguridad de Orbyt, nuestros usuarios o el público. Donde lo permita la ley, intentaremos notificarte antes de divulgar.</li>
  <li><strong>Transferencias Empresariales</strong>: Si Orbyt participa en una fusión, adquisición o venta de activos, tu información puede transferirse como parte de esa transacción. Te notificaremos antes de que tus datos personales queden sujetos a una política de privacidad diferente.</li>
</ul>
<p>No vendemos tu información personal a terceros. No compartimos tu información personal con fines publicitarios de terceros.</p>

<h2>Retención de Datos</h2>
<ul>
  <li><strong>Datos del Servidor</strong>: Los colores de perfil, la fecha de registro y el estado beta se conservan mientras tu cuenta de Bluesky esté activa y hayas interactuado con Orbyt. Eliminamos o anonimizamos estos datos en un plazo de 90 días después de que solicites la eliminación de la cuenta o recibamos aviso de que fue eliminada.</li>
  <li><strong>Datos Locales</strong>: Los datos en tu dispositivo persisten hasta que limpies el caché de la app, elimines la app o elimines tu cuenta.</li>
  <li><strong>Historial de Reproducción</strong>: Se elimina automáticamente de tu dispositivo después de 30 días.</li>
  <li><strong>Registros del Servidor</strong>: Los registros de acceso estándar (incluyendo las direcciones IP) se rotan y eliminan en un plazo de 30 días, a menos que se conserven más tiempo para investigar un incidente de seguridad u obligación legal.</li>
</ul>

<h2>Eliminación de Datos</h2>
<p>Puedes eliminar tus datos de las siguientes maneras:</p>
<ul>
  <li><strong>Datos Locales</strong>: Usa "Limpiar Caché" en la configuración de la app, o elimina y reinstala la app</li>
  <li><strong>Eliminación de Cuenta</strong>: Usa "Eliminar Cuenta" en la configuración de la app para borrar todos los datos locales de la cuenta</li>
  <li><strong>Datos del Servidor</strong>: <a href="/contact">Contáctanos</a> para solicitar la eliminación de tus datos en el servidor — lo completaremos en un plazo de 30 días</li>
</ul>

<h3>Limitaciones en la Eliminación (AT Protocol)</h3>
<p>Debido a la naturaleza descentralizada del AT Protocol, no podemos garantizar la eliminación completa de tus datos en todos los servicios de la red. Cuando eliminas contenido:</p>
<ul>
  <li>Haremos esfuerzos razonables para eliminar tu contenido de Orbyt.</li>
  <li>Enviaremos notificaciones de eliminación a otros servicios en la red del AT Protocol.</li>
  <li>No podemos obligar a servicios independientes del AT Protocol a eliminar tus datos. Algunas publicaciones pueden persistir en servicios fuera de nuestro control.</li>
  <li>Para solicitar la eliminación de otros servicios del AT Protocol, contacta esos servicios directamente.</li>
</ul>

<h2>Transferencias Internacionales de Datos</h2>
<p>Orbyt opera desde los Estados Unidos. Si accedes a la App desde fuera de los Estados Unidos, tu información puede transferirse y procesarse en los Estados Unidos u otros países donde operan nuestros proveedores de servicios. Donde lo exija la ley aplicable (p. ej., el RGPD), nos apoyamos en mecanismos de transferencia adecuados como las Cláusulas Contractuales Estándar para proteger las transferencias de datos transfronterizas.</p>

<h2>Seguridad</h2>
<p>Usamos medidas técnicas y organizativas razonables para proteger tu información:</p>
<ul>
  <li>Los tokens OAuth se almacenan en el almacenamiento seguro de tu dispositivo (Keychain en iOS, Keystore en Android)</li>
  <li>Nuestra API usa cifrado HTTPS para todas las comunicaciones</li>
  <li>No guardamos tu contraseña de Bluesky</li>
</ul>
<p>Ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro. No podemos garantizar la seguridad absoluta, pero te notificaremos sobre una brecha de datos según lo requiera la ley aplicable.</p>

<h2>Privacidad de los Menores</h2>
<p>Orbyt no está destinado a menores de 13 años (o la edad mínima aplicable en tu país). No recopilamos conscientemente información personal de menores de 13 años. Si descubrimos que hemos recopilado dicha información, tomaremos medidas para eliminarla de inmediato. Si crees que hemos recopilado información de un menor de 13 años, <a href="/contact">contáctanos</a>.</p>

<h2>Tus Derechos</h2>
<p>Dependiendo de tu ubicación, puedes tener los siguientes derechos sobre tu información personal:</p>
<ul>
  <li><strong>Acceso</strong>: Solicitar una copia de los datos personales que tenemos sobre ti</li>
  <li><strong>Corrección</strong>: Solicitar la corrección de información incorrecta o incompleta</li>
  <li><strong>Eliminación</strong>: Solicitar la eliminación de tus datos personales (sujeto a obligaciones legales de conservación)</li>
  <li><strong>Portabilidad</strong>: Recibir tus datos en un formato estructurado y legible por máquina</li>
  <li><strong>Oposición</strong>: Oponerte al procesamiento basado en intereses legítimos</li>
  <li><strong>Restricción</strong>: Solicitar que restrinjamos el procesamiento de tus datos en ciertas circunstancias</li>
  <li><strong>Retirar el Consentimiento</strong>: Donde el procesamiento se base en el consentimiento, retirarlo en cualquier momento sin afectar el procesamiento previo</li>
</ul>
<p>Para ejercer cualquiera de estos derechos, <a href="/contact">contáctanos</a>. Responderemos en el plazo requerido por la ley aplicable (generalmente 30 días). Si te encuentras en el EEE, el Reino Unido o Suiza, también tienes el derecho de presentar una queja ante tu autoridad local de protección de datos.</p>

<h2>Cambios a esta Política</h2>
<p>Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cambios materiales a través de la app o actualizando la fecha de "Última Actualización" en la parte superior de esta página. Tu uso continuo de Orbyt después de cualquier cambio constituye la aceptación de la política actualizada.</p>

<h2>Contáctanos</h2>
<p>Si tienes preguntas o solicitudes sobre esta Política de Privacidad, visita nuestra <a href="/contact">página de contacto</a>. Para solicitudes de acceso a datos, incluye "Solicitud de Privacidad" en tu mensaje para que podamos priorizar tu consulta.</p>
`,

  fr: `
<p>Cette Politique de Confidentialité décrit comment Orbyt (« nous », « notre ») collecte, utilise et partage des informations lorsque vous utilisez notre application mobile (« Orbyt » ou « l'App »). Nous sommes le responsable du traitement des données personnelles que nous collectons directement via l'App.</p>

<p><strong>Avis AT Protocol :</strong> Orbyt est un client tiers qui se connecte au réseau Bluesky via l'AT Protocol. Lorsque vous publiez ou interagissez sur Orbyt, cette activité se déroule sur le réseau décentralisé de l'AT Protocol. Veuillez également consulter la <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Politique de Confidentialité de Bluesky</a> pour comprendre comment vos données sont traitées sur leur réseau.</p>

<h2>La Version Courte</h2>
<ul>
  <li>Nous ne collectons que ce dont nous avons besoin pour faire fonctionner l'app — vos informations de profil Bluesky, quelques préférences côté serveur et des journaux réseau standard.</li>
  <li>Nous ne vendons pas vos données personnelles.</li>
  <li>Nous n'utilisons pas vos données pour entraîner des modèles d'IA ou d'apprentissage automatique.</li>
  <li>Nous n'utilisons pas de SDK de publicité ou de suivi tiers dans l'app Orbyt.</li>
  <li>La plupart du contenu que vous publiez sur l'AT Protocol est public par conception — traitez-le comme tel.</li>
  <li>Vous pouvez demander l'accès, la correction, la suppression ou une copie de vos données à tout moment en <a href="/contact">nous contactant</a>.</li>
</ul>

<h2>Informations que nous collectons</h2>

<h3>Informations provenant de Bluesky</h3>
<p>Lorsque vous vous connectez à Orbyt avec votre compte Bluesky, nous accédons aux éléments suivants de votre profil Bluesky :</p>
<ul>
  <li><strong>DID (Identifiant Décentralisé)</strong> : Votre identifiant unique sur l'AT Protocol</li>
  <li><strong>Handle</strong> : Votre nom d'utilisateur (ex. @utilisateur.bsky.social)</li>
  <li><strong>Nom d'Affichage</strong> : Le nom affiché sur votre profil</li>
  <li><strong>Avatar</strong> : Votre photo de profil</li>
</ul>
<p>Nous utilisons le système OAuth de Bluesky pour l'authentification. Orbyt ne stocke pas votre mot de passe Bluesky.</p>

<h3>Informations Stockées sur Nos Serveurs</h3>
<p>Nous stockons une quantité minimale de données sur nos serveurs pour alimenter les fonctionnalités spécifiques à Orbyt :</p>
<ul>
  <li><strong>Couleurs de Profil</strong> : Couleurs personnalisées de texte et d'arrière-plan que vous définissez dans l'application</li>
  <li><strong>Date d'Inscription</strong> : La date à laquelle vous avez utilisé Orbyt pour la première fois (pour identifier les utilisateurs bêta)</li>
  <li><strong>Statut Bêta</strong> : Si vous êtes un utilisateur initial d'Orbyt</li>
</ul>
<p>Ces données sont indexées à partir de votre enregistrement <code>com.getorbyt.profile</code> sur l'AT Protocol et sont intentionnellement minimales.</p>

<h3>Informations Stockées Localement sur Votre Appareil</h3>
<p>Les éléments suivants sont stockés uniquement sur votre appareil et ne sont jamais envoyés à nos serveurs :</p>
<ul>
  <li><strong>Informations de Compte</strong> : Vos comptes Bluesky enregistrés pour un changement rapide</li>
  <li><strong>Tokens OAuth</strong> : Tokens d'authentification sécurisés (stockés dans le stockage sécurisé de l'appareil)</li>
  <li><strong>Chaînes Abonnées</strong> : Les flux et chaînes auxquels vous vous êtes abonné</li>
  <li><strong>Historique de Visionnage</strong> : Les vidéos que vous avez regardées (utilisées pour filtrer votre flux « Votre Mix », traité entièrement sur l'appareil)</li>
  <li><strong>Préférences de l'App</strong> : Vos paramètres et préférences d'interface</li>
</ul>

<h3>Informations Partagées avec le Réseau AT Protocol</h3>
<p>L'AT Protocol est un protocole de réseau social décentralisé où la plupart de l'activité des utilisateurs est publique par conception. Lorsque vous utilisez Orbyt, les éléments suivants sont partagés avec et stockés sur le réseau AT Protocol (y compris Bluesky et d'autres services tiers) :</p>
<ul>
  <li><strong>Contenu Public</strong> : Publications, informations de profil, nom d'affichage, avatar, bio, « j'aime », abonnements, blocages et autres interactions sociales sont publiquement visibles par toute personne sur le réseau AT Protocol.</li>
  <li><strong>Données de Profil Orbyt</strong> : Vos couleurs de profil et chaînes abonnées sont stockées dans votre enregistrement <code>com.getorbyt.profile</code> sur l'AT Protocol.</li>
</ul>
<p>Ces données sont régies par les politiques du réseau AT Protocol et de ses opérateurs, y compris Bluesky Social, PBC, et non uniquement par Orbyt.</p>

<h3>Informations Collectées Automatiquement</h3>
<p>Lorsque vous utilisez Orbyt, nous pouvons collecter automatiquement :</p>
<ul>
  <li><strong>Informations sur l'Appareil</strong> : Type d'appareil, système d'exploitation et version de l'application (pour la compatibilité et le dépannage)</li>
  <li><strong>Adresse IP</strong> : Collectée via les requêtes réseau standard à notre API ; non conservée au-delà de la rotation normale des journaux serveur</li>
</ul>

<h3>Analyses du Site Web</h3>
<p>Notre site web (getorbyt.com) utilise <strong>Cloudflare Web Analytics</strong>, un service d'analyse respectueux de la vie privée qui :</p>
<ul>
  <li>N'utilise pas de cookies</li>
  <li>Ne suit pas les utilisateurs individuels entre les sites</li>
  <li>Ne collecte pas d'informations personnelles</li>
  <li>Ne collecte que des données agrégées et anonymisées sur les pages vues et les performances</li>
</ul>
<p>En savoir plus sur les pratiques de confidentialité de Cloudflare sur <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>L'application mobile Orbyt n'inclut aucun SDK d'analyse ou de publicité tiers.</strong></p>

<h2>Comment Nous Utilisons Vos Informations</h2>
<p>Nous traitons vos informations pour :</p>
<ul>
  <li>Fournir et exploiter l'application Orbyt (<em>exécution du contrat</em>)</li>
  <li>Permettre la connexion avec votre compte Bluesky (<em>exécution du contrat</em>)</li>
  <li>Afficher vos couleurs de profil et personnalisations (<em>exécution du contrat</em>)</li>
  <li>Afficher du contenu de flux personnalisé en fonction de vos abonnements (<em>exécution du contrat</em>)</li>
  <li>Filtrer votre flux « Votre Mix » en fonction de l'historique de visionnage, traité localement sur votre appareil (<em>exécution du contrat</em>)</li>
  <li>Identifier les utilisateurs bêta pour les fonctionnalités d'accès anticipé (<em>intérêt légitime</em>)</li>
  <li>Répondre aux demandes d'assistance (<em>intérêt légitime</em>)</li>
  <li>Respecter la loi applicable et protéger Orbyt et les utilisateurs contre les préjudices (<em>obligation légale / intérêt légitime</em>)</li>
</ul>

<h2>Comment Nous Partageons Vos Informations</h2>
<ul>
  <li><strong>Réseau AT Protocol</strong> : Votre contenu public est partagé avec le réseau décentralisé AT Protocol (y compris Bluesky et les applications tierces) comme partie nécessaire du fonctionnement du protocole.</li>
  <li><strong>Fournisseurs de Services</strong> : Nous utilisons Cloudflare pour l'hébergement et la distribution de contenu. Cloudflare traite les données en notre nom conformément à sa politique de confidentialité et aux accords de traitement de données.</li>
  <li><strong>Exigences Légales</strong> : Nous pouvons divulguer des informations lorsque la loi, une ordonnance judiciaire l'exige, ou pour protéger les droits, la sécurité d'Orbyt, nos utilisateurs ou le public. Dans la mesure permise par la loi, nous tenterons de vous avertir avant de divulguer.</li>
  <li><strong>Transferts d'Entreprise</strong> : Si Orbyt est impliqué dans une fusion, acquisition ou vente d'actifs, vos informations peuvent être transférées dans le cadre de cette transaction. Nous vous informerons avant que vos données personnelles ne soient soumises à une politique de confidentialité différente.</li>
</ul>
<p>Nous ne vendons pas vos données personnelles à des tiers. Nous ne partageons pas vos données personnelles à des fins publicitaires tierces.</p>

<h2>Conservation des Données</h2>
<ul>
  <li><strong>Données Serveur</strong> : Les couleurs de profil, la date d'inscription et le statut bêta sont conservés tant que votre compte Bluesky est actif et que vous avez interagi avec Orbyt. Nous supprimons ou anonymisons ces données dans les 90 jours suivant votre demande de suppression de compte ou la réception d'un avis de suppression.</li>
  <li><strong>Données Locales</strong> : Les données sur votre appareil persistent jusqu'à ce que vous vidiez le cache de l'app, supprimiez l'app ou supprimiez votre compte.</li>
  <li><strong>Historique de Visionnage</strong> : Automatiquement supprimé de votre appareil après 30 jours.</li>
  <li><strong>Journaux Serveur</strong> : Les journaux d'accès standard (y compris les adresses IP) sont supprimés dans les 30 jours, sauf s'ils doivent être conservés plus longtemps pour enquêter sur un incident de sécurité ou respecter une obligation légale.</li>
</ul>

<h2>Suppression des Données</h2>
<p>Vous pouvez supprimer vos données de la manière suivante :</p>
<ul>
  <li><strong>Données Locales</strong> : Utilisez « Vider le Cache » dans les paramètres de l'application, ou supprimez et réinstallez l'application</li>
  <li><strong>Suppression de Compte</strong> : Utilisez « Supprimer le Compte » dans les paramètres de l'application pour effacer toutes les données de compte locales</li>
  <li><strong>Données Serveur</strong> : <a href="/contact">Contactez-nous</a> pour demander la suppression de vos données côté serveur — nous le ferons dans les 30 jours</li>
</ul>

<h3>Limitations de la Suppression (AT Protocol)</h3>
<p>En raison de la nature décentralisée de l'AT Protocol, nous ne pouvons pas garantir la suppression complète de vos données sur tous les services du réseau. Lorsque vous supprimez du contenu :</p>
<ul>
  <li>Nous ferons des efforts raisonnables pour supprimer votre contenu d'Orbyt.</li>
  <li>Nous enverrons des notifications de suppression aux autres services du réseau AT Protocol.</li>
  <li>Nous ne pouvons pas contraindre les services indépendants de l'AT Protocol à supprimer vos données. Certaines publications peuvent persister sur des services hors de notre contrôle.</li>
  <li>Pour demander la suppression auprès d'autres services AT Protocol, contactez-les directement.</li>
</ul>

<h2>Transferts Internationaux de Données</h2>
<p>Orbyt est exploité depuis les États-Unis. Si vous accédez à l'App depuis l'extérieur des États-Unis, vos informations peuvent être transférées et traitées aux États-Unis ou dans d'autres pays où opèrent nos fournisseurs de services. Lorsque la loi applicable l'exige (p. ex., le RGPD), nous nous appuyons sur des mécanismes de transfert appropriés tels que les Clauses Contractuelles Types pour protéger les transferts de données transfrontaliers.</p>

<h2>Sécurité</h2>
<p>Nous utilisons des mesures techniques et organisationnelles raisonnables pour protéger vos informations :</p>
<ul>
  <li>Les tokens OAuth sont stockés dans le stockage sécurisé de votre appareil (Keychain sur iOS, Keystore sur Android)</li>
  <li>Notre API utilise le chiffrement HTTPS pour toutes les communications</li>
  <li>Nous ne stockons pas votre mot de passe Bluesky</li>
</ul>
<p>Aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée à 100 %. Nous ne pouvons pas garantir une sécurité absolue, mais nous vous informerons d'une violation de données conformément à la loi applicable.</p>

<h2>Confidentialité des Enfants</h2>
<p>Orbyt n'est pas destiné aux enfants de moins de 13 ans (ou l'âge minimum applicable dans votre pays). Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si nous apprenons que nous avons collecté de telles informations, nous prendrons des mesures pour les supprimer rapidement. Si vous pensez que nous avons collecté des informations auprès d'un enfant de moins de 13 ans, veuillez <a href="/contact">nous contacter</a>.</p>

<h2>Vos Droits</h2>
<p>Selon votre lieu de résidence, vous pouvez avoir les droits suivants concernant vos informations personnelles :</p>
<ul>
  <li><strong>Accès</strong> : Demander une copie des données personnelles que nous détenons sur vous</li>
  <li><strong>Rectification</strong> : Demander la correction d'informations inexactes ou incomplètes</li>
  <li><strong>Suppression</strong> : Demander la suppression de vos données personnelles (sous réserve des obligations légales de conservation)</li>
  <li><strong>Portabilité</strong> : Recevoir vos données dans un format structuré et lisible par machine</li>
  <li><strong>Opposition</strong> : Vous opposer au traitement fondé sur les intérêts légitimes</li>
  <li><strong>Limitation</strong> : Demander que nous limitions le traitement de vos données dans certaines circonstances</li>
  <li><strong>Retrait du Consentement</strong> : Lorsque le traitement est fondé sur le consentement, le retirer à tout moment sans affecter le traitement antérieur</li>
</ul>
<p>Pour exercer l'un de ces droits, <a href="/contact">contactez-nous</a>. Nous répondrons dans le délai requis par la loi applicable (généralement 30 jours). Si vous êtes situé dans l'EEE, au Royaume-Uni ou en Suisse, vous avez également le droit de déposer une plainte auprès de votre autorité locale de protection des données.</p>

<h2>Modifications de cette Politique</h2>
<p>Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Nous vous informerons des changements importants via l'application ou en mettant à jour la date de « Dernière Mise à Jour » en haut de cette page. Votre utilisation continue d'Orbyt après tout changement constitue une acceptation de la politique mise à jour.</p>

<h2>Nous Contacter</h2>
<p>Si vous avez des questions ou des demandes concernant cette Politique de Confidentialité, visitez notre <a href="/contact">page de contact</a>. Pour les demandes d'accès des personnes concernées, veuillez inclure « Demande de Confidentialité » dans votre message afin que nous puissions prioriser votre demande.</p>
`,

  it: `
<p>Questa Informativa sulla Privacy descrive come Orbyt ("noi", "ci", "nostro") raccoglie, usa e condivide informazioni quando utilizzi la nostra applicazione mobile ("Orbyt" o "l'App"). Siamo il titolare del trattamento dei dati personali che raccogliamo direttamente tramite l'App.</p>

<p><strong>Avviso AT Protocol:</strong> Orbyt è un client di terze parti che si connette alla rete Bluesky tramite l'AT Protocol. Quando pubblichi o interagisci su Orbyt, tale attività avviene sulla rete decentralizzata dell'AT Protocol. Ti invitiamo anche a consultare l'<a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Informativa sulla Privacy di Bluesky</a> per capire come vengono gestiti i tuoi dati sulla loro rete.</p>

<h2>La Versione Breve</h2>
<ul>
  <li>Raccogliamo solo ciò di cui abbiamo bisogno per gestire l'app — le informazioni del tuo profilo Bluesky, alcune preferenze lato server e i log di rete standard.</li>
  <li>Non vendiamo i tuoi dati personali.</li>
  <li>Non utilizziamo i tuoi dati per addestrare modelli di IA o di machine learning.</li>
  <li>Non utilizziamo SDK di pubblicità o tracciamento di terze parti nell'app Orbyt.</li>
  <li>La maggior parte dei contenuti che pubblichi sull'AT Protocol è pubblica per design — trattali come tali.</li>
  <li>Puoi richiedere l'accesso, la correzione, la cancellazione o una copia dei tuoi dati in qualsiasi momento <a href="/contact">contattandoci</a>.</li>
</ul>

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
<p>Questi dati sono indicizzati dal tuo record <code>com.getorbyt.profile</code> sull'AT Protocol e sono intenzionalmente minimali.</p>

<h3>Informazioni Memorizzate Localmente sul Tuo Dispositivo</h3>
<p>I seguenti dati sono memorizzati solo sul tuo dispositivo e non vengono mai inviati ai nostri server:</p>
<ul>
  <li><strong>Informazioni Account</strong>: I tuoi account Bluesky salvati per il cambio rapido</li>
  <li><strong>Token OAuth</strong>: Token di autenticazione sicuri (memorizzati nell'archiviazione sicura del dispositivo)</li>
  <li><strong>Canali Abbonati</strong>: Feed e canali a cui ti sei iscritto</li>
  <li><strong>Cronologia Visualizzazioni</strong>: Video che hai guardato (usati per filtrare il tuo feed "Il Tuo Mix", elaborato interamente sul dispositivo)</li>
  <li><strong>Preferenze dell'App</strong>: Le tue impostazioni e preferenze dell'interfaccia</li>
</ul>

<h3>Informazioni Condivise con la Rete AT Protocol</h3>
<p>L'AT Protocol è un protocollo di social networking decentralizzato in cui la maggior parte dell'attività degli utenti è pubblica per design. Quando utilizzi Orbyt, i seguenti dati vengono condivisi e memorizzati sulla rete AT Protocol (inclusi Bluesky e altri servizi di terze parti):</p>
<ul>
  <li><strong>Contenuto Pubblico</strong>: Post, informazioni del profilo, nome visualizzato, avatar, bio, "mi piace", follow, blocchi e altre interazioni sociali sono pubblicamente visibili a chiunque sulla rete AT Protocol.</li>
  <li><strong>Dati del Profilo Orbyt</strong>: I tuoi colori del profilo e i canali abbonati sono memorizzati nel tuo record <code>com.getorbyt.profile</code> sull'AT Protocol.</li>
</ul>
<p>Questi dati sono regolati dalle politiche della rete AT Protocol e dei suoi operatori, incluso Bluesky Social, PBC, e non esclusivamente da Orbyt.</p>

<h3>Informazioni Raccolte Automaticamente</h3>
<p>Quando utilizzi Orbyt, potremmo raccogliere automaticamente:</p>
<ul>
  <li><strong>Informazioni sul Dispositivo</strong>: Tipo di dispositivo, sistema operativo e versione dell'app (per compatibilità e risoluzione dei problemi)</li>
  <li><strong>Indirizzo IP</strong>: Raccolto tramite richieste di rete standard alla nostra API; non conservato oltre la normale rotazione dei log del server</li>
</ul>

<h3>Analisi del Sito Web</h3>
<p>Il nostro sito web (getorbyt.com) utilizza <strong>Cloudflare Web Analytics</strong>, un servizio di analisi rispettoso della privacy che:</p>
<ul>
  <li>Non utilizza cookie</li>
  <li>Non traccia i singoli utenti tra siti diversi</li>
  <li>Non raccoglie informazioni personali</li>
  <li>Raccoglie solo dati aggregati e anonimizzati su visualizzazioni di pagina e prestazioni</li>
</ul>
<p>Scopri di più sulle pratiche di privacy di Cloudflare su <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>L'app mobile Orbyt non include SDK di analisi o pubblicità di terze parti.</strong></p>

<h2>Come Utilizziamo le Tue Informazioni</h2>
<p>Trattiamo le tue informazioni per:</p>
<ul>
  <li>Fornire e gestire l'app Orbyt (<em>esecuzione del contratto</em>)</li>
  <li>Consentirti di accedere con il tuo account Bluesky (<em>esecuzione del contratto</em>)</li>
  <li>Visualizzare i tuoi colori del profilo e le personalizzazioni (<em>esecuzione del contratto</em>)</li>
  <li>Mostrare contenuti del feed personalizzati in base ai tuoi abbonamenti (<em>esecuzione del contratto</em>)</li>
  <li>Filtrare il tuo feed "Il Tuo Mix" in base alla cronologia delle visualizzazioni, elaborato localmente sul tuo dispositivo (<em>esecuzione del contratto</em>)</li>
  <li>Identificare gli utenti beta per le funzionalità di accesso anticipato (<em>legittimo interesse</em>)</li>
  <li>Rispondere alle richieste di assistenza (<em>legittimo interesse</em>)</li>
  <li>Rispettare la legge applicabile e proteggere Orbyt e gli utenti da danni (<em>obbligo legale / legittimo interesse</em>)</li>
</ul>

<h2>Come Condividiamo le Tue Informazioni</h2>
<ul>
  <li><strong>Rete AT Protocol</strong>: Il tuo contenuto pubblico viene condiviso con la rete decentralizzata AT Protocol (inclusi Bluesky e app di terze parti) come parte necessaria del funzionamento del protocollo.</li>
  <li><strong>Fornitori di Servizi</strong>: Utilizziamo Cloudflare per l'hosting e la distribuzione dei contenuti. Cloudflare elabora i dati per nostro conto in conformità con la sua informativa sulla privacy e gli accordi di trattamento dei dati.</li>
  <li><strong>Requisiti Legali</strong>: Potremmo divulgare informazioni quando richiesto dalla legge, da un ordine del tribunale, o per proteggere i diritti, la sicurezza di Orbyt, dei nostri utenti o del pubblico. Ove consentito dalla legge, tenteremo di avvisarti prima della divulgazione.</li>
  <li><strong>Trasferimenti Aziendali</strong>: Se Orbyt è coinvolta in una fusione, acquisizione o vendita di attivi, le tue informazioni potrebbero essere trasferite come parte di tale transazione. Ti informeremo prima che i tuoi dati personali siano soggetti a una diversa informativa sulla privacy.</li>
</ul>
<p>Non vendiamo le tue informazioni personali a terzi. Non condividiamo le tue informazioni personali a fini pubblicitari di terze parti.</p>

<h2>Conservazione dei Dati</h2>
<ul>
  <li><strong>Dati del Server</strong>: I colori del profilo, la data di iscrizione e lo stato beta vengono conservati finché il tuo account Bluesky è attivo e hai interagito con Orbyt. Cancelliamo o anonimizziamo questi dati entro 90 giorni dalla tua richiesta di rimozione account o dalla ricezione della notifica di cancellazione.</li>
  <li><strong>Dati Locali</strong>: I dati sul tuo dispositivo rimangono finché non svuoti la cache dell'app, elimini l'app o rimuovi il tuo account.</li>
  <li><strong>Cronologia Visualizzazioni</strong>: Viene eliminata automaticamente dal tuo dispositivo dopo 30 giorni.</li>
  <li><strong>Log del Server</strong>: I log di accesso standard (inclusi gli indirizzi IP) vengono ruotati ed eliminati entro 30 giorni, salvo che debbano essere conservati più a lungo per indagare su un incidente di sicurezza o un obbligo legale.</li>
</ul>

<h2>Eliminazione dei Dati</h2>
<p>Puoi eliminare i tuoi dati nei seguenti modi:</p>
<ul>
  <li><strong>Dati Locali</strong>: Usa "Svuota Cache" nelle impostazioni dell'app, oppure elimina e reinstalla l'app</li>
  <li><strong>Rimozione Account</strong>: Usa "Rimuovi Account" nelle impostazioni dell'app per cancellare tutti i dati dell'account locale</li>
  <li><strong>Dati del Server</strong>: <a href="/contact">Contattaci</a> per richiedere l'eliminazione dei tuoi dati lato server — lo completeremo entro 30 giorni</li>
</ul>

<h3>Limitazioni all'Eliminazione (AT Protocol)</h3>
<p>A causa della natura decentralizzata dell'AT Protocol, non possiamo garantire la cancellazione completa dei tuoi dati su tutti i servizi della rete. Quando elimini contenuti:</p>
<ul>
  <li>Faremo sforzi ragionevoli per rimuovere i tuoi contenuti da Orbyt.</li>
  <li>Invieremo notifiche di cancellazione agli altri servizi della rete AT Protocol.</li>
  <li>Non possiamo costringere i servizi indipendenti dell'AT Protocol a eliminare i tuoi dati. Alcuni post potrebbero persistere su servizi al di fuori del nostro controllo.</li>
  <li>Per richiedere la rimozione da altri servizi AT Protocol, contatta direttamente quei servizi.</li>
</ul>

<h2>Trasferimenti Internazionali di Dati</h2>
<p>Orbyt è gestita dagli Stati Uniti. Se accedi all'App dall'esterno degli Stati Uniti, le tue informazioni potrebbero essere trasferite e trattate negli Stati Uniti o in altri paesi in cui operano i nostri fornitori di servizi. Ove richiesto dalla legge applicabile (es. il GDPR), ci affidiamo a meccanismi di trasferimento appropriati come le Clausole Contrattuali Standard per proteggere i trasferimenti di dati transfrontalieri.</p>

<h2>Sicurezza</h2>
<p>Utilizziamo misure tecniche e organizzative ragionevoli per proteggere le tue informazioni:</p>
<ul>
  <li>I token OAuth sono memorizzati nell'archiviazione sicura del tuo dispositivo (Keychain su iOS, Keystore su Android)</li>
  <li>La nostra API utilizza la crittografia HTTPS per tutte le comunicazioni</li>
  <li>Non memorizziamo la tua password Bluesky</li>
</ul>
<p>Nessun metodo di trasmissione su Internet o di archiviazione elettronica è sicuro al 100%. Non possiamo garantire la sicurezza assoluta, ma ti informeremo di una violazione dei dati come richiesto dalla legge applicabile.</p>

<h2>Privacy dei Minori</h2>
<p>Orbyt non è destinata ai bambini di età inferiore ai 13 anni (o l'età minima applicabile nel tuo paese). Non raccogliamo consapevolmente informazioni personali da bambini di età inferiore ai 13 anni. Se scopriamo di aver raccolto tali informazioni, adotteremo misure per eliminarle tempestivamente. Se ritieni che abbiamo raccolto informazioni da un bambino di età inferiore ai 13 anni, <a href="/contact">contattaci</a>.</p>

<h2>I Tuoi Diritti</h2>
<p>A seconda della tua posizione, potresti avere i seguenti diritti riguardanti le tue informazioni personali:</p>
<ul>
  <li><strong>Accesso</strong>: Richiedere una copia dei dati personali che deteniamo su di te</li>
  <li><strong>Rettifica</strong>: Richiedere la correzione di informazioni inesatte o incomplete</li>
  <li><strong>Cancellazione</strong>: Richiedere la cancellazione dei tuoi dati personali (soggetto agli obblighi legali di conservazione)</li>
  <li><strong>Portabilità</strong>: Ricevere i tuoi dati in un formato strutturato e leggibile da macchina</li>
  <li><strong>Opposizione</strong>: Opporti al trattamento basato su legittimi interessi</li>
  <li><strong>Limitazione</strong>: Richiedere che limitiamo il trattamento dei tuoi dati in determinate circostanze</li>
  <li><strong>Revoca del Consenso</strong>: Laddove il trattamento si basi sul consenso, revocarlo in qualsiasi momento senza che ciò influisca sul trattamento precedente</li>
</ul>
<p>Per esercitare uno qualsiasi di questi diritti, <a href="/contact">contattaci</a>. Risponderemo entro il termine richiesto dalla legge applicabile (generalmente 30 giorni). Se ti trovi nello SEE, nel Regno Unito o in Svizzera, hai anche il diritto di presentare un reclamo alla tua autorità locale di protezione dei dati.</p>

<h2>Modifiche a questa Informativa</h2>
<p>Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Ti informeremo di modifiche sostanziali tramite l'app o aggiornando la data di "Ultimo Aggiornamento" in cima a questa pagina. Il tuo continuo utilizzo di Orbyt dopo eventuali modifiche costituisce accettazione dell'informativa aggiornata.</p>

<h2>Contattaci</h2>
<p>Se hai domande o richieste riguardanti questa Informativa sulla Privacy, visita la nostra <a href="/contact">pagina dei contatti</a>. Per le richieste di accesso degli interessati, includi "Richiesta Privacy" nel tuo messaggio in modo che possiamo prioritizzare la tua richiesta.</p>
`,

  ja: `
<p>このプライバシーポリシーは、Orbyt（「私たち」「当社」）が、モバイルアプリケーション（「Orbyt」または「アプリ」）のご利用に際して情報をどのように収集、使用、共有するかについて説明します。当社は、アプリを通じて直接収集する個人データの管理者です。</p>

<p><strong>ATプロトコルに関するお知らせ：</strong> OrbytはATプロトコルを通じてBlueskyネットワークに接続するサードパーティクライアントです。Orbytで投稿または交流する場合、その活動は分散型ATプロトコルネットワーク上で行われます。当社のネットワークでのデータの取り扱いを理解するために、<a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Blueskyのプライバシーポリシー</a>もご確認ください。</p>

<h2>要約版</h2>
<ul>
  <li>アプリを運営するために必要なもののみ収集します — Blueskyプロフィール情報、サーバー側のいくつかの設定、標準的なネットワークログ。</li>
  <li>個人情報を販売しません。</li>
  <li>AIや機械学習モデルのトレーニングにデータを使用しません。</li>
  <li>OrbytアプリにサードパーティのアドSDKや追跡SDKを使用しません。</li>
  <li>ATプロトコルに投稿するコンテンツのほとんどは設計上公開されています — そのようにお取り扱いください。</li>
  <li>いつでも<a href="/contact">お問い合わせ</a>いただき、データへのアクセス、訂正、削除、またはコピーを請求できます。</li>
</ul>

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
<p>このデータはATプロトコル上の<code>com.getorbyt.profile</code>レコードからインデックスされており、意図的に最小限にしています。</p>

<h3>デバイスにローカル保存される情報</h3>
<p>以下の情報はデバイスにのみ保存され、当社サーバーには決して送信されません：</p>
<ul>
  <li><strong>アカウント情報</strong>：素早く切り替えるために保存されたBlueskyアカウント</li>
  <li><strong>OAuthトークン</strong>：セキュアな認証トークン（デバイスのセキュアストレージに保存）</li>
  <li><strong>チャンネル登録</strong>：購読しているフィードとチャンネル</li>
  <li><strong>視聴履歴</strong>：視聴した動画（「あなたのミックス」フィードのフィルタリングに使用、デバイス上で完全に処理）</li>
  <li><strong>アプリ設定</strong>：設定とUI好み</li>
</ul>

<h3>ATプロトコルネットワークと共有される情報</h3>
<p>ATプロトコルは、ほとんどのユーザーアクティビティが設計上公開される分散型ソーシャルネットワーキングプロトコルです。Orbytを使用すると、以下の情報がATプロトコルネットワーク（Blueskyや他のサードパーティサービスを含む）と共有・保存されます：</p>
<ul>
  <li><strong>公開コンテンツ</strong>：投稿、プロフィール情報、表示名、アバター、プロフィール紹介文、いいね、フォロー、ブロック、その他のソーシャルインタラクションは、ATプロトコルネットワーク上の誰でも公開閲覧できます。</li>
  <li><strong>Orbytプロフィールデータ</strong>：プロフィールカラーとチャンネル登録はATプロトコル上の<code>com.getorbyt.profile</code>レコードに保存されます。</li>
</ul>
<p>このデータはATプロトコルネットワークとその運営者（Bluesky Social, PBCを含む）のポリシーに従い、Orbytのみが管理するわけではありません。</p>

<h3>自動収集される情報</h3>
<p>Orbytを使用すると、当社は自動的に以下の情報を収集する場合があります：</p>
<ul>
  <li><strong>デバイス情報</strong>：デバイスの種類、OS、アプリバージョン（互換性とトラブルシューティングのため）</li>
  <li><strong>IPアドレス</strong>：当社APIへの標準的なネットワークリクエストで収集；通常のサーバーログローテーションを超えて保持しません</li>
</ul>

<h3>ウェブサイト分析</h3>
<p>当社ウェブサイト（getorbyt.com）は、プライバシーを保護する分析サービスである<strong>Cloudflare Web Analytics</strong>を使用しています。このサービスは：</p>
<ul>
  <li>Cookieを使用しません</li>
  <li>サイトをまたいで個人ユーザーを追跡しません</li>
  <li>個人情報を収集しません</li>
  <li>ページビューとパフォーマンスに関する集計・匿名化データのみを収集します</li>
</ul>
<p>Cloudflareのプライバシー慣行の詳細は<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>でご確認ください。</p>

<p><strong>Orbytモバイルアプリにはサードパーティの分析や広告SDKは含まれていません。</strong></p>

<h2>情報の使用方法</h2>
<p>当社は以下の目的でお客様の情報を処理します：</p>
<ul>
  <li>Orbytアプリの提供と運営（<em>契約の履行</em>）</li>
  <li>Blueskyアカウントでのサインインの有効化（<em>契約の履行</em>）</li>
  <li>プロフィールカラーとカスタマイズの表示（<em>契約の履行</em>）</li>
  <li>購読に基づいたパーソナライズされたフィードコンテンツの表示（<em>契約の履行</em>）</li>
  <li>視聴履歴に基づいた「あなたのミックス」フィードのフィルタリング（デバイス上でローカル処理）（<em>契約の履行</em>）</li>
  <li>早期アクセス機能のためのベータユーザーの特定（<em>正当な利益</em>）</li>
  <li>サポートリクエストへの対応（<em>正当な利益</em>）</li>
  <li>適用法の遵守とOrbytおよびユーザーの保護（<em>法的義務/正当な利益</em>）</li>
</ul>

<h2>情報の共有方法</h2>
<ul>
  <li><strong>ATプロトコルネットワーク</strong>：あなたの公開コンテンツは、プロトコルの仕組みの必要な部分として、分散型ATプロトコルネットワーク（Blueskyやサードパーティアプリを含む）と共有されます。</li>
  <li><strong>サービスプロバイダー</strong>：ホスティングとコンテンツ配信にCloudflareを使用しています。Cloudflareはプライバシーポリシーおよびデータ処理契約に基づき、当社に代わってデータを処理します。</li>
  <li><strong>法的要件</strong>：法律、裁判所命令で要求された場合、またはOrbyt、ユーザー、もしくは公衆の権利、安全を保護するために情報を開示する場合があります。法律で許可されている場合、開示前にお知らせするよう努めます。</li>
  <li><strong>事業譲渡</strong>：Orbytが合併、買収、または資産売却に関与する場合、あなたの情報がその取引の一部として移転される可能性があります。あなたの個人データが異なるプライバシーポリシーの対象となる前にお知らせします。</li>
</ul>
<p>当社はあなたの個人情報を第三者に販売しません。サードパーティの広告目的でお客様の個人情報を共有しません。</p>

<h2>データ保持</h2>
<ul>
  <li><strong>サーバーデータ</strong>：プロフィールカラー、参加日、ベータステータスは、BlueskyアカウントがアクティブでOrbytと交流している間は保持されます。アカウント削除のリクエストまたはアカウント削除の通知を受け取ってから90日以内にこのデータを削除または匿名化します。</li>
  <li><strong>ローカルデータ</strong>：デバイスのデータは、アプリのキャッシュをクリア、アプリを削除、またはアカウントを削除するまで残ります。</li>
  <li><strong>視聴履歴</strong>：30日後にデバイスから自動的に削除されます。</li>
  <li><strong>サーバーログ</strong>：標準アクセスログ（IPアドレスを含む）は30日以内にローテーションおよび削除されます（セキュリティインシデントや法的義務の調査のために長期保存が必要な場合を除く）。</li>
</ul>

<h2>データの削除</h2>
<p>以下の方法でデータを削除できます：</p>
<ul>
  <li><strong>ローカルデータ</strong>：アプリ設定の「キャッシュをクリア」を使用するか、アプリを削除して再インストールする</li>
  <li><strong>アカウント削除</strong>：アプリ設定の「アカウントを削除」を使用して、すべてのローカルアカウントデータを消去する</li>
  <li><strong>サーバーデータ</strong>：サーバー側のデータの削除を依頼するには<a href="/contact">お問い合わせください</a> — 30日以内に対応します</li>
</ul>

<h3>削除の制限（ATプロトコル）</h3>
<p>ATプロトコルの分散的な性質により、ネットワーク上のすべてのサービスにわたるデータの完全な削除を保証することはできません。コンテンツを削除する場合：</p>
<ul>
  <li>Orbytからのコンテンツ削除に合理的な努力を行います。</li>
  <li>ATプロトコルネットワーク上の他のサービスに削除通知を送信します。</li>
  <li>独立したATプロトコルサービスにデータの削除を強制することはできません。一部の投稿は当社の管理外のサービスに存在し続ける可能性があります。</li>
  <li>他のATプロトコルサービスからの削除を要求するには、そのサービスに直接お問い合わせください。</li>
</ul>

<h2>国際データ転送</h2>
<p>Orbytは米国から運営されています。米国外からアプリにアクセスする場合、あなたの情報は米国または当社のサービスプロバイダーが運営する他の国に転送・処理される可能性があります。適用法（例：GDPR）が要求する場合、標準契約条項などの適切な転送メカニズムに基づいてクロスボーダーデータ転送を保護します。</p>

<h2>セキュリティ</h2>
<p>当社はあなたの情報を保護するために合理的な技術的・組織的措置を講じます：</p>
<ul>
  <li>OAuthトークンはデバイスのセキュアストレージ（iOSのKeychain、AndroidのKeystore）に保存されます</li>
  <li>当社APIはすべての通信にHTTPS暗号化を使用します</li>
  <li>Blueskyのパスワードは保存しません</li>
</ul>
<p>インターネット経由の送信や電子的な保存のいずれの方法も100%安全ではありません。絶対的なセキュリティを保証することはできませんが、適用法が要求する場合、データ侵害についてお知らせします。</p>

<h2>子どものプライバシー</h2>
<p>Orbytは13歳未満の子ども（またはお住まいの国で適用される最低年齢）を対象としていません。13歳未満の子どもから故意に個人情報を収集することはありません。そのような情報を収集したことが判明した場合、速やかに削除するための措置を講じます。13歳未満の子どもから情報を収集したと思われる場合は、<a href="/contact">お問い合わせください</a>。</p>

<h2>あなたの権利</h2>
<p>お住まいの地域によっては、個人情報に関して以下の権利を持つ場合があります：</p>
<ul>
  <li><strong>アクセス</strong>：当社が保持するあなたの個人データのコピーを請求する</li>
  <li><strong>訂正</strong>：不正確または不完全な情報の修正を請求する</li>
  <li><strong>削除</strong>：個人データの削除を請求する（法的保持義務の対象）</li>
  <li><strong>ポータビリティ</strong>：構造化された機械可読形式でデータを受け取る</li>
  <li><strong>異議申し立て</strong>：正当な利益に基づく処理に異議を申し立てる</li>
  <li><strong>制限</strong>：特定の状況においてデータの処理を制限するよう請求する</li>
  <li><strong>同意の撤回</strong>：処理が同意に基づく場合、以前の処理に影響を与えることなく、いつでも撤回する</li>
</ul>
<p>これらの権利を行使するには、<a href="/contact">お問い合わせください</a>。適用法が要求する期間内（通常30日）に対応します。EEA、英国、またはスイスにお住まいの場合、地域のデータ保護機関に苦情を申し立てる権利もあります。</p>

<h2>ポリシーの変更</h2>
<p>このプライバシーポリシーは随時更新する場合があります。重大な変更については、アプリを通じて、またはこのページ上部の「最終更新日」を更新することでお知らせします。変更後もOrbytを継続してご利用いただくことで、更新されたポリシーへの同意となります。</p>

<h2>お問い合わせ</h2>
<p>このプライバシーポリシーについてご質問やご要望がある場合は、<a href="/contact">お問い合わせページ</a>をご覧ください。データ主体アクセス要求については、メッセージに「プライバシーリクエスト」とご記入いただくと、優先的に対応いたします。</p>
`,

  ko: `
<p>이 개인정보 처리방침은 Orbyt("우리", "저희")가 모바일 애플리케이션("Orbyt" 또는 "앱")을 사용할 때 정보를 어떻게 수집, 사용 및 공유하는지 설명합니다. 저희는 앱을 통해 직접 수집하는 개인정보의 처리자입니다.</p>

<p><strong>AT Protocol 안내:</strong> Orbyt는 AT Protocol을 통해 Bluesky 네트워크에 연결하는 서드파티 클라이언트입니다. Orbyt에서 게시하거나 상호작용하면 해당 활동은 분산형 AT Protocol 네트워크에서 발생합니다. 해당 네트워크에서 귀하의 데이터가 어떻게 처리되는지 이해하기 위해 <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Bluesky 개인정보 처리방침</a>도 검토하시기 바랍니다.</p>

<h2>요약 버전</h2>
<ul>
  <li>앱 운영에 필요한 것만 수집합니다 — Bluesky 프로필 정보, 일부 서버 측 환경설정, 표준 네트워크 로그.</li>
  <li>개인정보를 판매하지 않습니다.</li>
  <li>AI 또는 머신러닝 모델 훈련에 데이터를 사용하지 않습니다.</li>
  <li>Orbyt 앱에 서드파티 광고 또는 추적 SDK를 사용하지 않습니다.</li>
  <li>AT Protocol에 게시하는 대부분의 콘텐츠는 설계상 공개됩니다 — 그렇게 취급하세요.</li>
  <li>언제든지 <a href="/contact">문의하여</a> 데이터에 대한 접근, 수정, 삭제 또는 사본을 요청할 수 있습니다.</li>
</ul>

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
<p>이 데이터는 AT Protocol의 <code>com.getorbyt.profile</code> 레코드에서 인덱싱되며 의도적으로 최소화되어 있습니다.</p>

<h3>기기에 로컬로 저장되는 정보</h3>
<p>다음 정보는 기기에만 저장되며 당사 서버로 전송되지 않습니다:</p>
<ul>
  <li><strong>계정 정보</strong>: 빠른 전환을 위해 저장된 Bluesky 계정</li>
  <li><strong>OAuth 토큰</strong>: 보안 인증 토큰 (기기 보안 스토리지에 저장)</li>
  <li><strong>구독한 채널</strong>: 구독한 피드와 채널</li>
  <li><strong>시청 기록</strong>: 시청한 동영상 ("나의 믹스" 피드 필터링에 사용, 기기에서 완전히 처리)</li>
  <li><strong>앱 환경설정</strong>: 설정 및 UI 선호도</li>
</ul>

<h3>AT Protocol 네트워크와 공유되는 정보</h3>
<p>AT Protocol은 대부분의 사용자 활동이 설계상 공개되는 분산형 소셜 네트워킹 프로토콜입니다. Orbyt를 사용하면 다음 정보가 AT Protocol 네트워크(Bluesky 및 기타 서드파티 서비스 포함)와 공유되고 저장됩니다:</p>
<ul>
  <li><strong>공개 콘텐츠</strong>: 게시물, 프로필 정보, 표시 이름, 아바타, 소개, 좋아요, 팔로우, 차단 및 기타 소셜 상호작용은 AT Protocol 네트워크의 누구에게나 공개적으로 표시됩니다.</li>
  <li><strong>Orbyt 프로필 데이터</strong>: 프로필 색상과 구독한 채널은 AT Protocol의 <code>com.getorbyt.profile</code> 레코드에 저장됩니다.</li>
</ul>
<p>이 데이터는 AT Protocol 네트워크와 그 운영자(Bluesky Social, PBC 포함)의 정책에 따르며, Orbyt만이 통제하는 것이 아닙니다.</p>

<h3>자동으로 수집되는 정보</h3>
<p>Orbyt를 사용하면 다음 정보가 자동으로 수집될 수 있습니다:</p>
<ul>
  <li><strong>기기 정보</strong>: 기기 유형, 운영 체제 및 앱 버전 (호환성 및 문제 해결용)</li>
  <li><strong>IP 주소</strong>: 당사 API에 대한 표준 네트워크 요청을 통해 수집; 일반 서버 로그 순환 이후에는 보관하지 않습니다</li>
</ul>

<h3>웹사이트 분석</h3>
<p>당사 웹사이트(getorbyt.com)는 개인정보를 보호하는 분석 서비스인 <strong>Cloudflare Web Analytics</strong>를 사용합니다. 이 서비스는:</p>
<ul>
  <li>쿠키를 사용하지 않습니다</li>
  <li>사이트 간 개별 사용자를 추적하지 않습니다</li>
  <li>개인 정보를 수집하지 않습니다</li>
  <li>페이지 방문 및 성능에 대한 집계, 익명화된 데이터만 수집합니다</li>
</ul>
<p>Cloudflare의 개인정보 보호 관행에 대한 자세한 내용은 <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>에서 확인할 수 있습니다.</p>

<p><strong>Orbyt 모바일 앱에는 서드파티 분석 또는 광고 SDK가 포함되어 있지 않습니다.</strong></p>

<h2>정보 사용 방법</h2>
<p>당사는 다음 목적으로 귀하의 정보를 처리합니다:</p>
<ul>
  <li>Orbyt 앱 제공 및 운영 (<em>계약 이행</em>)</li>
  <li>Bluesky 계정으로 로그인 지원 (<em>계약 이행</em>)</li>
  <li>프로필 색상 및 사용자 지정 표시 (<em>계약 이행</em>)</li>
  <li>구독을 기반으로 개인화된 피드 콘텐츠 표시 (<em>계약 이행</em>)</li>
  <li>시청 기록을 기반으로 "나의 믹스" 피드 필터링, 기기에서 로컬로 처리 (<em>계약 이행</em>)</li>
  <li>얼리 액세스 기능을 위한 베타 사용자 식별 (<em>정당한 이익</em>)</li>
  <li>지원 요청에 응답 (<em>정당한 이익</em>)</li>
  <li>관련 법률 준수 및 Orbyt와 사용자 보호 (<em>법적 의무 / 정당한 이익</em>)</li>
</ul>

<h2>정보 공유 방법</h2>
<ul>
  <li><strong>AT Protocol 네트워크</strong>: 귀하의 공개 콘텐츠는 프로토콜 작동의 필수적인 부분으로서 분산형 AT Protocol 네트워크(Bluesky 및 서드파티 앱 포함)와 공유됩니다.</li>
  <li><strong>서비스 제공업체</strong>: 호스팅 및 콘텐츠 전달을 위해 Cloudflare를 사용합니다. Cloudflare는 개인정보 처리방침 및 데이터 처리 계약에 따라 당사를 대신하여 데이터를 처리합니다.</li>
  <li><strong>법적 요건</strong>: 법률, 법원 명령이 요구하거나 Orbyt, 당사 사용자 또는 공중의 권리, 안전을 보호하기 위해 정보를 공개할 수 있습니다. 법적으로 허용되는 경우 공개 전에 귀하에게 알리려고 노력합니다.</li>
  <li><strong>사업 양도</strong>: Orbyt가 합병, 인수 또는 자산 매각에 관여하는 경우 귀하의 정보가 해당 거래의 일부로 이전될 수 있습니다. 귀하의 개인정보가 다른 개인정보 처리방침의 적용을 받기 전에 통지해 드립니다.</li>
</ul>
<p>당사는 귀하의 개인 정보를 제3자에게 판매하지 않습니다. 서드파티 광고 목적으로 개인 정보를 공유하지 않습니다.</p>

<h2>데이터 보존</h2>
<ul>
  <li><strong>서버 데이터</strong>: 프로필 색상, 가입 날짜 및 베타 상태는 Bluesky 계정이 활성 상태이고 Orbyt와 상호작용한 동안 보존됩니다. 계정 제거 요청 또는 계정 삭제 통지를 받은 후 90일 이내에 이 데이터를 삭제하거나 익명화합니다.</li>
  <li><strong>로컬 데이터</strong>: 기기의 데이터는 앱 캐시를 지우거나, 앱을 삭제하거나, 계정을 제거할 때까지 유지됩니다.</li>
  <li><strong>시청 기록</strong>: 30일 후 기기에서 자동으로 삭제됩니다.</li>
  <li><strong>서버 로그</strong>: 표준 액세스 로그(IP 주소 포함)는 30일 이내에 순환 삭제됩니다(보안 사고 조사 또는 법적 의무를 위해 더 오래 보관해야 하는 경우 제외).</li>
</ul>

<h2>데이터 삭제</h2>
<p>다음 방법으로 데이터를 삭제할 수 있습니다:</p>
<ul>
  <li><strong>로컬 데이터</strong>: 앱 설정에서 "캐시 지우기"를 사용하거나, 앱을 삭제하고 재설치</li>
  <li><strong>계정 제거</strong>: 앱 설정에서 "계정 제거"를 사용하여 모든 로컬 계정 데이터 삭제</li>
  <li><strong>서버 데이터</strong>: 서버 측 데이터 삭제를 요청하려면 <a href="/contact">문의하세요</a> — 30일 이내에 완료합니다</li>
</ul>

<h3>삭제 제한 사항 (AT Protocol)</h3>
<p>AT Protocol의 분산적 특성으로 인해 네트워크의 모든 서비스에서 귀하의 데이터가 완전히 삭제된다는 것을 보장할 수 없습니다. 콘텐츠를 삭제할 때:</p>
<ul>
  <li>Orbyt에서 귀하의 콘텐츠를 제거하기 위해 합리적인 노력을 기울입니다.</li>
  <li>AT Protocol 네트워크의 다른 서비스에 삭제 알림을 보냅니다.</li>
  <li>독립적인 AT Protocol 서비스가 귀하의 데이터를 삭제하도록 강제할 수 없습니다. 일부 게시물은 당사의 통제 외부 서비스에 유지될 수 있습니다.</li>
  <li>다른 AT Protocol 서비스에서 삭제를 요청하려면 해당 서비스에 직접 연락하세요.</li>
</ul>

<h2>국제 데이터 이전</h2>
<p>Orbyt는 미국에서 운영됩니다. 미국 외부에서 앱에 액세스하는 경우 귀하의 정보가 미국이나 당사 서비스 제공업체가 운영하는 기타 국가로 이전 및 처리될 수 있습니다. 관련 법률(예: GDPR)이 요구하는 경우 국경을 초월한 데이터 이전을 보호하기 위해 표준 계약 조항과 같은 적절한 이전 메커니즘에 의존합니다.</p>

<h2>보안</h2>
<p>당사는 귀하의 정보를 보호하기 위해 합리적인 기술적·조직적 조치를 취합니다:</p>
<ul>
  <li>OAuth 토큰은 기기의 보안 스토리지(iOS의 Keychain, Android의 Keystore)에 저장됩니다</li>
  <li>당사 API는 모든 통신에 HTTPS 암호화를 사용합니다</li>
  <li>Bluesky 비밀번호를 저장하지 않습니다</li>
</ul>
<p>인터넷을 통한 전송이나 전자적 저장 방법이 100% 안전하지는 않습니다. 절대적인 보안을 보장할 수 없지만, 관련 법률이 요구하는 경우 데이터 침해에 대해 알려 드립니다.</p>

<h2>아동 개인정보</h2>
<p>Orbyt는 만 13세 미만 아동(또는 귀하의 국가에서 적용되는 최소 연령)을 대상으로 하지 않습니다. 만 13세 미만 아동으로부터 의도적으로 개인 정보를 수집하지 않습니다. 그러한 정보를 수집했음을 알게 되면 신속하게 삭제하는 조치를 취합니다. 만 13세 미만 아동으로부터 정보를 수집했다고 생각되면 <a href="/contact">문의하세요</a>.</p>

<h2>귀하의 권리</h2>
<p>귀하의 위치에 따라 개인 정보에 관한 다음과 같은 권리가 있을 수 있습니다:</p>
<ul>
  <li><strong>접근</strong>: 당사가 보유한 개인 정보의 사본 요청</li>
  <li><strong>수정</strong>: 부정확하거나 불완전한 정보의 수정 요청</li>
  <li><strong>삭제</strong>: 개인 정보 삭제 요청 (법적 보관 의무 적용)</li>
  <li><strong>이동성</strong>: 구조화된 기계 판독 가능 형식으로 데이터 수신</li>
  <li><strong>이의제기</strong>: 정당한 이익에 근거한 처리에 이의제기</li>
  <li><strong>제한</strong>: 특정 상황에서 데이터 처리 제한 요청</li>
  <li><strong>동의 철회</strong>: 처리가 동의에 기반하는 경우, 이전 처리에 영향을 주지 않고 언제든지 철회</li>
</ul>
<p>이러한 권리를 행사하려면 <a href="/contact">문의하세요</a>. 관련 법률이 요구하는 기간(일반적으로 30일) 내에 응답합니다. EEA, 영국 또는 스위스에 거주하는 경우 현지 데이터 보호 기관에 불만을 제기할 권리도 있습니다.</p>

<h2>이 방침의 변경</h2>
<p>이 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 앱을 통해 또는 이 페이지 상단의 "최종 업데이트" 날짜를 업데이트하여 중요한 변경 사항을 알려드립니다. 변경 후 Orbyt를 계속 사용하면 업데이트된 방침에 동의하는 것으로 간주됩니다.</p>

<h2>문의하기</h2>
<p>이 개인정보 처리방침에 대해 질문이나 요청이 있으시면 <a href="/contact">문의 페이지</a>를 방문하세요. 데이터 주체 액세스 요청의 경우 메시지에 "개인정보 요청"을 포함하여 저희가 귀하의 문의를 우선 처리할 수 있도록 해주세요.</p>
`,

  'pt-BR': `
<p>Esta Política de Privacidade descreve como o Orbyt ("nós", "nos", "nosso") coleta, usa e compartilha informações quando você usa nosso aplicativo móvel ("Orbyt" ou "o App"). Somos o controlador dos dados pessoais que coletamos diretamente pelo App.</p>

<p><strong>Aviso sobre o AT Protocol:</strong> O Orbyt é um cliente de terceiros que se conecta à rede Bluesky por meio do AT Protocol. Quando você publica ou interage no Orbyt, essa atividade ocorre na rede descentralizada do AT Protocol. Recomendamos também que você revise a <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Política de Privacidade do Bluesky</a> para entender como seus dados são tratados na rede deles.</p>

<h2>A Versão Curta</h2>
<ul>
  <li>Coletamos apenas o necessário para operar o app — suas informações de perfil do Bluesky, algumas preferências no servidor e logs de rede padrão.</li>
  <li>Não vendemos suas informações pessoais.</li>
  <li>Não usamos seus dados para treinar modelos de IA ou aprendizado de máquina.</li>
  <li>Não usamos SDKs de publicidade ou rastreamento de terceiros no app do Orbyt.</li>
  <li>A maioria do conteúdo que você publica no AT Protocol é público por design — trate-o como tal.</li>
  <li>Você pode solicitar acesso, correção, exclusão ou uma cópia dos seus dados a qualquer momento <a href="/contact">entrando em contato conosco</a>.</li>
</ul>

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
<p>Esses dados são indexados do seu registro <code>com.getorbyt.profile</code> no AT Protocol e são intencionalmente mínimos.</p>

<h3>Informações Armazenadas Localmente no Seu Dispositivo</h3>
<p>As seguintes informações são armazenadas apenas no seu dispositivo e nunca enviadas para nossos servidores:</p>
<ul>
  <li><strong>Informações da Conta</strong>: Suas contas Bluesky salvas para troca rápida</li>
  <li><strong>Tokens OAuth</strong>: Tokens de autenticação seguros (armazenados no armazenamento seguro do dispositivo)</li>
  <li><strong>Canais Assinados</strong>: Feeds e canais nos quais você se inscreveu</li>
  <li><strong>Histórico de Visualizações</strong>: Vídeos que você assistiu (usados para filtrar seu feed "Seu Mix", processado inteiramente no dispositivo)</li>
  <li><strong>Preferências do App</strong>: Suas configurações e preferências de interface</li>
</ul>

<h3>Informações Compartilhadas com a Rede AT Protocol</h3>
<p>O AT Protocol é um protocolo de rede social descentralizado onde a maioria das atividades dos usuários é pública por design. Quando você usa o Orbyt, as seguintes informações são compartilhadas e armazenadas na rede AT Protocol (incluindo Bluesky e outros serviços de terceiros):</p>
<ul>
  <li><strong>Conteúdo Público</strong>: Publicações, informações de perfil, nome de exibição, avatar, bio, curtidas, seguidores, bloqueios e outras interações sociais são publicamente visíveis para qualquer pessoa na rede AT Protocol.</li>
  <li><strong>Dados do Perfil Orbyt</strong>: Suas cores de perfil e canais assinados são armazenados no seu registro <code>com.getorbyt.profile</code> no AT Protocol.</li>
</ul>
<p>Esses dados são regidos pelas políticas da rede AT Protocol e seus operadores, incluindo Bluesky Social, PBC, e não exclusivamente pelo Orbyt.</p>

<h3>Informações Coletadas Automaticamente</h3>
<p>Quando você usa o Orbyt, podemos coletar automaticamente:</p>
<ul>
  <li><strong>Informações do Dispositivo</strong>: Tipo de dispositivo, sistema operacional e versão do app (para compatibilidade e resolução de problemas)</li>
  <li><strong>Endereço IP</strong>: Coletado por meio de solicitações de rede padrão para nossa API; não retido além da rotação normal de logs do servidor</li>
</ul>

<h3>Análise do Site</h3>
<p>Nosso site (getorbyt.com) usa o <strong>Cloudflare Web Analytics</strong>, um serviço de análise que preserva a privacidade e que:</p>
<ul>
  <li>Não usa cookies</li>
  <li>Não rastreia usuários individuais entre sites</li>
  <li>Não coleta informações pessoais</li>
  <li>Coleta apenas dados agregados e anonimizados sobre visualizações de página e desempenho</li>
</ul>
<p>Saiba mais sobre as práticas de privacidade da Cloudflare em <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a>.</p>

<p><strong>O app móvel do Orbyt não inclui SDKs de análise ou publicidade de terceiros.</strong></p>

<h2>Como Usamos Suas Informações</h2>
<p>Processamos suas informações para:</p>
<ul>
  <li>Fornecer e operar o app Orbyt (<em>execução do contrato</em>)</li>
  <li>Permitir o login com sua conta Bluesky (<em>execução do contrato</em>)</li>
  <li>Exibir suas cores de perfil e personalizações (<em>execução do contrato</em>)</li>
  <li>Mostrar conteúdo de feed personalizado com base em suas assinaturas (<em>execução do contrato</em>)</li>
  <li>Filtrar seu feed "Seu Mix" com base no histórico de visualizações, processado localmente no seu dispositivo (<em>execução do contrato</em>)</li>
  <li>Identificar usuários beta para funcionalidades de acesso antecipado (<em>interesse legítimo</em>)</li>
  <li>Responder a solicitações de suporte (<em>interesse legítimo</em>)</li>
  <li>Cumprir a legislação aplicável e proteger o Orbyt e os usuários de danos (<em>obrigação legal / interesse legítimo</em>)</li>
</ul>

<h2>Como Compartilhamos Suas Informações</h2>
<ul>
  <li><strong>Rede AT Protocol</strong>: Seu conteúdo público é compartilhado com a rede descentralizada AT Protocol (incluindo Bluesky e apps de terceiros) como parte necessária do funcionamento do protocolo.</li>
  <li><strong>Provedores de Serviços</strong>: Usamos a Cloudflare para hospedagem e distribuição de conteúdo. A Cloudflare processa dados em nosso nome conforme sua política de privacidade e acordos de processamento de dados.</li>
  <li><strong>Requisitos Legais</strong>: Podemos divulgar informações quando exigido por lei, ordem judicial, ou para proteger os direitos, a segurança do Orbyt, nossos usuários ou o público. Onde permitido por lei, tentaremos notificá-lo antes de divulgar.</li>
  <li><strong>Transferências Empresariais</strong>: Se o Orbyt estiver envolvido em uma fusão, aquisição ou venda de ativos, suas informações podem ser transferidas como parte dessa transação. Iremos notificá-lo antes que seus dados pessoais fiquem sujeitos a uma política de privacidade diferente.</li>
</ul>
<p>Não vendemos suas informações pessoais a terceiros. Não compartilhamos suas informações pessoais para fins de publicidade de terceiros.</p>

<h2>Retenção de Dados</h2>
<ul>
  <li><strong>Dados do Servidor</strong>: Cores de perfil, data de entrada e status beta são retidos enquanto sua conta Bluesky estiver ativa e você tiver interagido com o Orbyt. Excluímos ou anonimizamos esses dados em até 90 dias após sua solicitação de remoção de conta ou ao recebermos aviso de que sua conta foi excluída.</li>
  <li><strong>Dados Locais</strong>: Os dados no seu dispositivo persistem até que você limpe o cache do app, exclua o app ou remova sua conta.</li>
  <li><strong>Histórico de Visualizações</strong>: Excluído automaticamente do seu dispositivo após 30 dias.</li>
  <li><strong>Logs do Servidor</strong>: Logs de acesso padrão (incluindo endereços IP) são rotacionados e excluídos em 30 dias, a menos que precisem ser retidos por mais tempo para investigar um incidente de segurança ou obrigação legal.</li>
</ul>

<h2>Exclusão de Dados</h2>
<p>Você pode excluir seus dados das seguintes maneiras:</p>
<ul>
  <li><strong>Dados Locais</strong>: Use "Limpar Cache" nas configurações do app, ou exclua e reinstale o app</li>
  <li><strong>Remoção de Conta</strong>: Use "Remover Conta" nas configurações do app para limpar todos os dados locais da conta</li>
  <li><strong>Dados do Servidor</strong>: <a href="/contact">Entre em contato conosco</a> para solicitar a exclusão dos seus dados no servidor — concluiremos isso em 30 dias</li>
</ul>

<h3>Limitações na Exclusão (AT Protocol)</h3>
<p>Devido à natureza descentralizada do AT Protocol, não podemos garantir a exclusão completa dos seus dados em todos os serviços da rede. Quando você exclui conteúdo:</p>
<ul>
  <li>Faremos esforços razoáveis para remover seu conteúdo do Orbyt.</li>
  <li>Enviaremos notificações de exclusão a outros serviços na rede AT Protocol.</li>
  <li>Não podemos obrigar serviços independentes do AT Protocol a excluir seus dados. Algumas publicações podem persistir em serviços fora do nosso controle.</li>
  <li>Para solicitar a remoção de outros serviços AT Protocol, entre em contato com eles diretamente.</li>
</ul>

<h2>Transferências Internacionais de Dados</h2>
<p>O Orbyt é operado a partir dos Estados Unidos. Se você acessar o App de fora dos Estados Unidos, suas informações poderão ser transferidas e processadas nos Estados Unidos ou em outros países onde nossos provedores de serviços operam. Quando exigido pela lei aplicável (p. ex., o RGPD), nos apoiamos em mecanismos de transferência adequados, como as Cláusulas Contratuais Padrão, para proteger as transferências de dados transfronteiriças.</p>

<h2>Segurança</h2>
<p>Usamos medidas técnicas e organizacionais razoáveis para proteger suas informações:</p>
<ul>
  <li>Os tokens OAuth são armazenados no armazenamento seguro do seu dispositivo (Keychain no iOS, Keystore no Android)</li>
  <li>Nossa API usa criptografia HTTPS para todas as comunicações</li>
  <li>Não armazenamos sua senha do Bluesky</li>
</ul>
<p>Nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro. Não podemos garantir segurança absoluta, mas notificaremos você sobre uma violação de dados conforme exigido pela lei aplicável.</p>

<h2>Privacidade de Crianças</h2>
<p>O Orbyt não é destinado a crianças menores de 13 anos (ou a idade mínima aplicável no seu país). Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se descobrirmos que coletamos tais informações, tomaremos providências para excluí-las prontamente. Se você acredita que coletamos informações de uma criança menor de 13 anos, <a href="/contact">entre em contato conosco</a>.</p>

<h2>Seus Direitos</h2>
<p>Dependendo da sua localização, você pode ter os seguintes direitos relacionados às suas informações pessoais:</p>
<ul>
  <li><strong>Acesso</strong>: Solicitar uma cópia dos dados pessoais que temos sobre você</li>
  <li><strong>Correção</strong>: Solicitar a correção de informações imprecisas ou incompletas</li>
  <li><strong>Exclusão</strong>: Solicitar a exclusão dos seus dados pessoais (sujeito a obrigações legais de retenção)</li>
  <li><strong>Portabilidade</strong>: Receber seus dados em um formato estruturado e legível por máquina</li>
  <li><strong>Objeção</strong>: Opor-se ao processamento com base em interesses legítimos</li>
  <li><strong>Restrição</strong>: Solicitar que restrinjamos o processamento dos seus dados em determinadas circunstâncias</li>
  <li><strong>Retirar o Consentimento</strong>: Onde o processamento é baseado em consentimento, retirá-lo a qualquer momento sem afetar o processamento anterior</li>
</ul>
<p>Para exercer qualquer um desses direitos, <a href="/contact">entre em contato conosco</a>. Responderemos no prazo exigido pela lei aplicável (geralmente 30 dias). Se você estiver localizado no EEE, no Reino Unido ou na Suíça, também tem o direito de apresentar uma reclamação à sua autoridade local de proteção de dados.</p>

<h2>Alterações nesta Política</h2>
<p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças materiais por meio do app ou atualizando a data de "Última Atualização" no topo desta página. Seu uso continuado do Orbyt após qualquer alteração constitui aceitação da política atualizada.</p>

<h2>Fale Conosco</h2>
<p>Se você tiver dúvidas ou solicitações sobre esta Política de Privacidade, visite nossa <a href="/contact">página de contato</a>. Para solicitações de acesso de titulares de dados, inclua "Solicitação de Privacidade" em sua mensagem para que possamos priorizar sua consulta.</p>
`,

  tr: `
<p>Bu Gizlilik Politikası, Orbyt'ın ("biz", "bize", "bizim") mobil uygulamamızı ("Orbyt" veya "Uygulama") kullandığınızda bilgileri nasıl topladığını, kullandığını ve paylaştığını açıklamaktadır. Uygulama aracılığıyla doğrudan topladığımız kişisel veriler için veri sorumlusuyuz.</p>

<p><strong>AT Protocol Bildirimi:</strong> Orbyt, AT Protocol aracılığıyla Bluesky ağına bağlanan bir üçüncü taraf istemcidir. Orbyt'ta gönderi paylaştığınızda veya etkileşimde bulunduğunuzda, bu etkinlik merkezi olmayan AT Protocol ağında gerçekleşir. Verilerinizin bu ağda nasıl işlendiğini anlamak için <a href="https://bsky.social/about/support/privacy-policy" target="_blank" rel="noopener">Bluesky'nin Gizlilik Politikasını</a> da incelemenizi öneririz.</p>

<h2>Kısa Versiyon</h2>
<ul>
  <li>Uygulamayı çalıştırmak için yalnızca gerekli olanı topluyoruz — Bluesky profil bilgileriniz, birkaç sunucu tarafı tercih ve standart ağ günlükleri.</li>
  <li>Kişisel bilgilerinizi satmıyoruz.</li>
  <li>Verilerinizi yapay zeka veya makine öğrenimi modeli eğitimi için kullanmıyoruz.</li>
  <li>Orbyt uygulamasında üçüncü taraf reklam veya izleme SDK'ları kullanmıyoruz.</li>
  <li>AT Protocol'de paylaştığınız içeriklerin çoğu tasarımı gereği herkese açıktır — buna göre hareket edin.</li>
  <li>Dilediğiniz zaman <a href="/contact">bizimle iletişime geçerek</a> verilerinize erişim, düzeltme, silme veya kopyasını talep edebilirsiniz.</li>
</ul>

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
<p>Orbyt'a özgü özellikleri sunmak için sunucularımızda minimum düzeyde veri tutarız:</p>
<ul>
  <li><strong>Profil Renkleri</strong>: Uygulamada belirlediğiniz özel metin ve arka plan renkleri</li>
  <li><strong>Katılım Tarihi</strong>: Orbyt'ı ilk kullandığınız tarih (beta kullanıcılarını tanımlamak için)</li>
  <li><strong>Beta Durumu</strong>: Orbyt'ın erken kullanıcısı olup olmadığınız</li>
</ul>
<p>Bu veriler, AT Protocol'deki <code>com.getorbyt.profile</code> kaydınızdan dizinlenir ve kasıtlı olarak minimumda tutulur.</p>

<h3>Cihazınızda Yerel Olarak Saklanan Bilgiler</h3>
<p>Aşağıdaki bilgiler yalnızca cihazınızda saklanır ve sunucularımıza hiçbir zaman gönderilmez:</p>
<ul>
  <li><strong>Hesap Bilgileri</strong>: Hızlı geçiş için kaydedilmiş Bluesky hesaplarınız</li>
  <li><strong>OAuth Token'ları</strong>: Güvenli kimlik doğrulama token'ları (cihazın güvenli depolama alanında saklanır)</li>
  <li><strong>Abone Olunan Kanallar</strong>: Abone olduğunuz akışlar ve kanallar</li>
  <li><strong>İzleme Geçmişi</strong>: İzlediğiniz videolar ("Karışımınız" akışını filtrelemek için kullanılır, tamamen cihazda işlenir)</li>
  <li><strong>Uygulama Tercihleri</strong>: Ayarlarınız ve arayüz tercihleriniz</li>
</ul>

<h3>AT Protocol Ağıyla Paylaşılan Bilgiler</h3>
<p>AT Protocol, kullanıcı etkinliğinin büyük çoğunluğunun tasarımı gereği herkese açık olduğu merkezi olmayan bir sosyal ağ protokolüdür. Orbyt'ı kullandığınızda, aşağıdaki bilgiler AT Protocol ağıyla (Bluesky ve diğer üçüncü taraf hizmetler dahil) paylaşılır ve burada saklanır:</p>
<ul>
  <li><strong>Genel İçerik</strong>: Gönderileriniz, profil bilgileriniz, görünen adınız, avatarınız, biyografiniz, beğenileriniz, takiplerıniz, engellemeleriniz ve diğer sosyal etkileşimler AT Protocol ağındaki herkes tarafından görülebilir.</li>
  <li><strong>Orbyt Profil Verileri</strong>: Profil renkleriniz ve abone olunan kanallarınız, AT Protocol'deki <code>com.getorbyt.profile</code> kaydınızda saklanır.</li>
</ul>
<p>Bu veriler yalnızca Orbyt tarafından değil; Bluesky Social, PBC dahil olmak üzere AT Protocol ağının ve operatörlerinin politikalarına göre yönetilir.</p>

<h3>Otomatik Olarak Toplanan Bilgiler</h3>
<p>Orbyt'ı kullandığınızda otomatik olarak toplayabileceğimiz bilgiler:</p>
<ul>
  <li><strong>Cihaz Bilgileri</strong>: Cihaz türü, işletim sistemi ve uygulama sürümü (uyumluluk ve sorun giderme için)</li>
  <li><strong>IP Adresi</strong>: API'mize yapılan standart ağ istekleri aracılığıyla toplanır; normal sunucu günlük döngüsünün ötesinde saklanmaz</li>
</ul>

<h3>Web Sitesi Analitiği</h3>
<p>Web sitemiz (getorbyt.com), gizliliği koruyan bir analitik hizmeti olan <strong>Cloudflare Web Analytics</strong>'i kullanmaktadır. Bu hizmet:</p>
<ul>
  <li>Çerez kullanmaz</li>
  <li>Bireysel kullanıcıları siteler arasında takip etmez</li>
  <li>Kişisel bilgi toplamaz</li>
  <li>Yalnızca sayfa görüntülemeleri ve performans hakkında toplu, anonimleştirilmiş veriler toplar</li>
</ul>
<p>Cloudflare'in gizlilik uygulamaları hakkında daha fazla bilgiyi <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">cloudflare.com/privacypolicy</a> adresinde bulabilirsiniz.</p>

<p><strong>Orbyt mobil uygulaması herhangi bir üçüncü taraf analitik veya reklam SDK'sı içermemektedir.</strong></p>

<h2>Bilgilerinizi Nasıl Kullanırız</h2>
<p>Bilgilerinizi şu amaçlarla işleriz:</p>
<ul>
  <li>Orbyt uygulamasını sağlamak ve çalıştırmak (<em>sözleşmenin ifası</em>)</li>
  <li>Bluesky hesabınızla giriş yapmanızı sağlamak (<em>sözleşmenin ifası</em>)</li>
  <li>Profil renklerinizi ve özelleştirmelerinizi görüntülemek (<em>sözleşmenin ifası</em>)</li>
  <li>Aboneliklerinize göre kişiselleştirilmiş akış içeriği göstermek (<em>sözleşmenin ifası</em>)</li>
  <li>"Karışımınız" akışını izleme geçmişine göre filtrelemek, cihazınızda yerel olarak işlenir (<em>sözleşmenin ifası</em>)</li>
  <li>Erken erişim özellikleri için beta kullanıcılarını belirlemek (<em>meşru menfaat</em>)</li>
  <li>Destek taleplerine yanıt vermek (<em>meşru menfaat</em>)</li>
  <li>Geçerli mevzuata uymak ve Orbyt ile kullanıcıları zarardan korumak (<em>yasal yükümlülük / meşru menfaat</em>)</li>
</ul>

<h2>Bilgilerinizi Nasıl Paylaşırız</h2>
<ul>
  <li><strong>AT Protocol Ağı</strong>: Genel içeriğiniz, protokolün işleyişinin gerekli bir parçası olarak merkezi olmayan AT Protocol ağıyla (Bluesky ve üçüncü taraf uygulamalar dahil) paylaşılır.</li>
  <li><strong>Hizmet Sağlayıcılar</strong>: Barındırma ve içerik dağıtımı için Cloudflare'i kullanırız. Cloudflare, gizlilik politikası ve veri işleme sözleşmeleri kapsamında verilerimizi bizim adımıza işler.</li>
  <li><strong>Yasal Gereksinimler</strong>: Yasalar, mahkeme kararları gerektirdiğinde veya Orbyt'ın, kullanıcılarımızın ya da kamuoyunun haklarını ve güvenliğini korumak için bilgileri ifşa edebiliriz. Yasaların izin verdiği durumlarda ifşa öncesinde sizi bilgilendirmeye çalışırız.</li>
  <li><strong>İşletme Devirleri</strong>: Orbyt'ın bir birleşme, satın alma veya varlık satışına dahil olması durumunda bilgileriniz bu işlemin bir parçası olarak aktarılabilir. Kişisel verilerinizin farklı bir gizlilik politikasına tabi olmadan önce sizi bilgilendireceğiz.</li>
</ul>
<p>Kişisel bilgilerinizi üçüncü taraflara satmıyoruz. Kişisel bilgilerinizi üçüncü taraf reklam amaçlarıyla paylaşmıyoruz.</p>

<h2>Veri Saklama</h2>
<ul>
  <li><strong>Sunucu Verileri</strong>: Profil renkleri, katılım tarihi ve beta durumu, Bluesky hesabınız aktif olduğu ve Orbyt ile etkileşimde bulunduğunuz sürece saklanır. Hesap silme talebinizden veya hesabınızın silindiğine dair bildirim almamızdan itibaren 90 gün içinde bu verileri sileriz veya anonimleştiririz.</li>
  <li><strong>Yerel Veriler</strong>: Cihazınızdaki veriler, uygulama önbelleğini temizleyene, uygulamayı silene veya hesabınızı kaldırana kadar kalır.</li>
  <li><strong>İzleme Geçmişi</strong>: 30 gün sonra cihazınızdan otomatik olarak silinir.</li>
  <li><strong>Sunucu Günlükleri</strong>: Standart erişim günlükleri (IP adresleri dahil) 30 gün içinde döndürülür ve silinir; ancak bir güvenlik olayını araştırmak veya yasal bir yükümlülüğü yerine getirmek için daha uzun süre saklanması gerekebilir.</li>
</ul>

<h2>Veri Silme</h2>
<p>Verilerinizi şu yollarla silebilirsiniz:</p>
<ul>
  <li><strong>Yerel Veriler</strong>: Uygulama ayarlarında "Önbelleği Temizle" seçeneğini kullanın veya uygulamayı silin ve yeniden yükleyin</li>
  <li><strong>Hesap Kaldırma</strong>: Tüm yerel hesap verilerini temizlemek için uygulama ayarlarında "Hesabı Kaldır" seçeneğini kullanın</li>
  <li><strong>Sunucu Verileri</strong>: Sunucu tarafındaki verilerinizin silinmesini talep etmek için <a href="/contact">bizimle iletişime geçin</a> — 30 gün içinde tamamlayacağız</li>
</ul>

<h3>Silme Kısıtlamaları (AT Protocol)</h3>
<p>AT Protocol'ün merkezi olmayan yapısı nedeniyle, ağdaki tüm hizmetlerde verilerinizin tamamen silineceğini garanti edemeyiz. İçerik sildiğinizde:</p>
<ul>
  <li>İçeriğinizi Orbyt'tan kaldırmak için makul çaba göstereceğiz.</li>
  <li>AT Protocol ağındaki diğer hizmetlere silme bildirimleri göndereceğiz.</li>
  <li>Bağımsız AT Protocol hizmetlerini verilerinizi silmeye zorlayamayız. Bazı gönderiler, kontrolümüz dışındaki hizmetlerde var olmaya devam edebilir.</li>
  <li>Diğer AT Protocol hizmetlerinden kaldırılmasını talep etmek için bu hizmetlerle doğrudan iletişime geçin.</li>
</ul>

<h2>Uluslararası Veri Aktarımları</h2>
<p>Orbyt, Amerika Birleşik Devletleri'nden işletilmektedir. Uygulamaya ABD dışından erişiyorsanız, bilgileriniz ABD'ye veya hizmet sağlayıcılarımızın faaliyet gösterdiği diğer ülkelere aktarılabilir ve burada işlenebilir. Geçerli mevzuatın gerektirdiği durumlarda (ör. GDPR), sınır ötesi veri aktarımlarını korumak için Standart Sözleşme Maddeleri gibi uygun aktarım mekanizmalarına dayanıyoruz.</p>

<h2>Güvenlik</h2>
<p>Bilgilerinizi korumak için makul teknik ve organizasyonel önlemler alırız:</p>
<ul>
  <li>OAuth token'ları cihazınızın güvenli depolama alanında saklanır (iOS'ta Keychain, Android'de Keystore)</li>
  <li>API'miz tüm iletişimler için HTTPS şifrelemesi kullanır</li>
  <li>Bluesky şifrenizi saklamıyoruz</li>
</ul>
<p>İnternet üzerinden yapılan hiçbir iletim yöntemi veya elektronik depolama %100 güvenli değildir. Mutlak güvenlik garanti edemeyiz ancak geçerli mevzuatın gerektirdiği şekilde veri ihlallerini size bildireceğiz.</p>

<h2>Çocukların Gizliliği</h2>
<p>Orbyt, 13 yaşın altındaki çocuklara (veya ülkenizde geçerli olan minimum yaşa) yönelik değildir. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Bu tür bilgileri topladığımızı öğrenirsek, derhal silmek için adım atacağız. 13 yaşın altındaki bir çocuktan bilgi topladığımıza inanıyorsanız lütfen <a href="/contact">bizimle iletişime geçin</a>.</p>

<h2>Haklarınız</h2>
<p>Konumunuza bağlı olarak kişisel bilgilerinizle ilgili aşağıdaki haklara sahip olabilirsiniz:</p>
<ul>
  <li><strong>Erişim</strong>: Hakkınızda tuttuğumuz kişisel verilerin bir kopyasını talep etmek</li>
  <li><strong>Düzeltme</strong>: Yanlış veya eksik bilgilerin düzeltilmesini talep etmek</li>
  <li><strong>Silme</strong>: Kişisel verilerinizin silinmesini talep etmek (yasal saklama yükümlülüklerine tabi olarak)</li>
  <li><strong>Taşınabilirlik</strong>: Verilerinizi yapılandırılmış, makine tarafından okunabilir bir formatta almak</li>
  <li><strong>İtiraz</strong>: Meşru menfaatlere dayalı işlemeye itiraz etmek</li>
  <li><strong>Kısıtlama</strong>: Belirli koşullarda verilerinizin işlenmesini kısıtlamamızı talep etmek</li>
  <li><strong>Rızayı Geri Çekme</strong>: İşleme rızaya dayandığında, önceki işlemeyi etkilemeksizin her zaman geri çekebilmek</li>
</ul>
<p>Bu haklardan herhangi birini kullanmak için <a href="/contact">bizimle iletişime geçin</a>. Geçerli mevzuatın gerektirdiği süre içinde (genellikle 30 gün) yanıt vereceğiz. AEA, Birleşik Krallık veya İsviçre'de ikamet ediyorsanız, yerel veri koruma otoritenize şikayette bulunma hakkınız da bulunmaktadır.</p>

<h2>Bu Politikadaki Değişiklikler</h2>
<p>Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler hakkında sizi uygulama aracılığıyla veya bu sayfanın üst kısmındaki "Son Güncelleme" tarihini güncelleyerek bilgilendireceğiz. Herhangi bir değişiklikten sonra Orbyt'ı kullanmaya devam etmeniz, güncellenen politikayı kabul ettiğiniz anlamına gelir.</p>

<h2>Bize Ulaşın</h2>
<p>Bu Gizlilik Politikası hakkında sorularınız veya talepleriniz varsa <a href="/contact">iletişim sayfamızı</a> ziyaret edin. Veri sahibi erişim talepleri için, mesajınıza "Gizlilik Talebi" yazın; böylece talebinize öncelik verebiliriz.</p>
`,
}

export function getPrivacyContent(locale: string): string {
  return privacyContent[locale as LocaleKey] ?? privacyContent.en
}
