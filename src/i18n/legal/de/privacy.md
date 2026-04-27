Diese Datenschutzerklärung beschreibt, wie Orbyt („wir", „uns", „unser") Informationen erhebt, verwendet und weitergibt, wenn Sie unsere mobile Anwendung („Orbyt" oder „die App") nutzen. Wir sind der Verantwortliche für personenbezogene Daten, die wir direkt über die App erheben.

**AT-Protokoll-Hinweis:** Orbyt ist ein Drittanbieter-Client, der über das AT-Protokoll eine Verbindung zum Bluesky-Netzwerk herstellt. Wenn Sie bei Orbyt Inhalte veröffentlichen oder interagieren, findet diese Aktivität im dezentralen AT-Protokoll-Netzwerk statt. Lesen Sie bitte auch die [Datenschutzerklärung von Bluesky](https://bsky.social/about/support/privacy-policy), um zu verstehen, wie Ihre Daten in deren Netzwerk behandelt werden.

## Die Kurzversion

- Wir erheben nur, was wir für den Betrieb der App benötigen – Ihre Bluesky-Profilinformationen, einige serverseitige Einstellungen und Standard-Netzwerkprotokolle.
- Wir verkaufen Ihre personenbezogenen Daten nicht.
- Wir verwenden Ihre Daten nicht zum Training von KI- oder maschinellen Lernmodellen.
- Wir verwenden keine Werbe-SDKs von Drittanbietern. Wir verwenden Sentry ausschließlich zur Absturz- und Fehlerüberwachung.
- Die meisten Inhalte, die Sie im AT-Protokoll veröffentlichen, sind standardmäßig öffentlich – behandeln Sie sie entsprechend.
- Sie können jederzeit Zugang, Berichtigung, Löschung oder eine Kopie Ihrer Daten beantragen, indem Sie [uns kontaktieren](/contact).

## Informationen, die wir erheben

### Informationen von Bluesky

Wenn Sie sich mit Ihrem Bluesky-Konto bei Orbyt anmelden, greifen wir auf folgende Informationen aus Ihrem Bluesky-Profil zu:

- **DID (Dezentraler Identifikator)**: Ihre eindeutige Kennung im AT-Protokoll
- **Handle**: Ihr Benutzername (z.B. @benutzername.bsky.social)
- **Anzeigename**: Ihr Profil-Anzeigename
- **Avatar**: Ihr Profilbild

Wir verwenden das OAuth-System von Bluesky zur Authentifizierung. Orbyt speichert Ihr Bluesky-Passwort nicht.

### Auf unseren Servern gespeicherte Informationen

Wir bewahren eine kleine Datenmenge auf unseren Servern auf, um Orbyt-spezifische Funktionen bereitzustellen:

- **Profilfarben**: Benutzerdefinierte Text- und Hintergrundfarben, die Sie in der App eingestellt haben
- **Beitrittsdatum**: Das Datum, an dem Sie Orbyt zum ersten Mal genutzt haben
- **Beta-Status**: Ob Sie ein früher Orbyt-Nutzer sind

Diese Daten werden aus Ihrem `com.getorbyt.profile`-Datensatz im AT-Protokoll indiziert und sind bewusst minimal gehalten.

### Lokal auf Ihrem Gerät gespeicherte Informationen

Folgende Informationen werden nur auf Ihrem Gerät gespeichert und nie an unsere Server übermittelt:

- **Kontoinformationen**: Ihre gespeicherten Bluesky-Konten für schnelles Wechseln
- **OAuth-Token**: Sichere Authentifizierungstoken (gespeichert im sicheren Gerätespeicher)
- **Abonnierte Kanäle**: Feeds und Kanäle, die Sie abonniert haben
- **Wiedergabeverlauf**: Videos, die Sie angesehen haben (zur Filterung Ihres „Ihr Mix"-Feeds, vollständig auf dem Gerät verarbeitet)
- **App-Einstellungen**: Ihre Einstellungen und UI-Präferenzen

### Mit dem AT-Protokoll-Netzwerk geteilte Informationen

Das AT-Protokoll ist ein dezentrales Soziales-Netzwerk-Protokoll, bei dem die meisten Nutzeraktivitäten standardmäßig öffentlich sind. Wenn Sie Orbyt nutzen, werden folgende Informationen mit dem AT-Protokoll-Netzwerk (einschließlich Bluesky und anderen Drittanbieterdiensten) geteilt und dort gespeichert:

- **Öffentliche Inhalte**: Beiträge, Profilinformationen, Anzeigename, Avatar, Bio, Likes, Follows, Blocks und andere soziale Interaktionen sind für jeden im AT-Protokoll-Netzwerk öffentlich sichtbar.
- **Orbyt-Profildaten**: Ihre Profilfarben und abonnierten Kanäle sind in Ihrem `com.getorbyt.profile`-Datensatz im AT-Protokoll gespeichert.

Diese Daten unterliegen den Richtlinien des AT-Protokoll-Netzwerks und seiner Betreiber, einschließlich Bluesky Social, PBC, und werden nicht ausschließlich von Orbyt kontrolliert.

### Automatisch erhobene Informationen

Wenn Sie Orbyt nutzen, erheben wir möglicherweise automatisch:

- **Geräteinformationen**: Gerätetyp, Betriebssystem und App-Version
- **IP-Adresse**: Wird durch standardmäßige Netzwerkanfragen an unsere API erhoben; wird nicht über die normale Serverprotokoll-Rotation hinaus gespeichert

### Fehlerüberwachung

Die Orbyt-App verwendet **Sentry**, einen Fehlerüberwachungsdienst, um Abstürze und Fehler zu erkennen und zu diagnostizieren. Bei einem Fehler kann Sentry Folgendes erfassen:

- **Fehlerdetails**: Stack-Traces und Fehlermeldungen
- **Geräteinformationen**: Gerätetyp, BS-Version und App-Version
- **Breadcrumbs**: Ein begrenztes Protokoll der letzten App-Aktionen vor dem Fehler

Diese Daten werden ausschließlich zur Identifizierung und Behebung von Fehlern verwendet — nicht für Werbung oder Verhaltensprofilierung. Sie werden von Sentry, Inc. gemäß deren [Datenschutzrichtlinie](https://sentry.io/privacy/) verarbeitet.

### Website-Analyse

Unsere Website (getorbyt.com) verwendet **Cloudflare Web Analytics**, einen datenschutzfreundlichen Analysedienst, der:

- Keine Cookies verwendet
- Keine einzelnen Nutzer seitenübergreifend verfolgt
- Keine personenbezogenen Daten erhebt
- Nur aggregierte, anonymisierte Daten über Seitenaufrufe und Leistung erhebt

Mehr über die Datenschutzpraktiken von Cloudflare erfahren Sie unter [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/).

**Die Orbyt-Mobile-App enthält keine Werbe-SDKs von Drittanbietern. Wir verwenden Sentry ausschließlich zur Fehlerüberwachung.**

## Wie wir Ihre Informationen verwenden

Wir verarbeiten Ihre Informationen, um:

- Die Orbyt-App bereitzustellen und zu betreiben (*Vertragserfüllung*)
- Die Anmeldung mit Ihrem Bluesky-Konto zu ermöglichen (*Vertragserfüllung*)
- Ihre Profilfarben und Anpassungen anzuzeigen (*Vertragserfüllung*)
- Personalisierte Feed-Inhalte basierend auf Ihren Abonnements anzuzeigen (*Vertragserfüllung*)
- Ihren „Ihr Mix"-Feed basierend auf dem Wiedergabeverlauf zu filtern, lokal auf Ihrem Gerät verarbeitet (*Vertragserfüllung*)
- Beta-Nutzer für Funktionen mit frühem Zugang zu identifizieren (*berechtigtes Interesse*)
- Abstürze und Fehler über Sentry zu erkennen und zu beheben (*berechtigtes Interesse*)
- Auf Support-Anfragen zu antworten (*berechtigtes Interesse*)
- Anwendbares Recht einzuhalten und Orbyt und Nutzer vor Schaden zu schützen (*rechtliche Verpflichtung / berechtigtes Interesse*)

## Wie wir Ihre Informationen weitergeben

- **AT-Protokoll-Netzwerk**: Ihre öffentlichen Inhalte werden mit dem dezentralen AT-Protokoll-Netzwerk (einschließlich Bluesky und Drittanbieter-Apps) als notwendiger Teil der Funktionsweise des Protokolls geteilt.
- **Dienstleister**: Wir verwenden Cloudflare für Hosting und Content Delivery sowie Sentry zur Fehlerüberwachung. Diese Anbieter verarbeiten Daten in unserem Namen gemäß ihren jeweiligen Datenschutzerklärungen und Datenverarbeitungsverträgen.
- **Rechtliche Anforderungen**: Wir können Informationen offenlegen, wenn dies gesetzlich vorgeschrieben, durch Gerichtsbeschluss angeordnet oder zum Schutz der Rechte, der Sicherheit von Orbyt, unseren Nutzern oder der Öffentlichkeit erforderlich ist. Soweit gesetzlich zulässig, werden wir versuchen, Sie vor der Offenlegung zu benachrichtigen.
- **Unternehmensübertragungen**: Falls Orbyt an einer Fusion, Übernahme oder einem Verkauf von Vermögenswerten beteiligt ist, können Ihre Informationen als Teil dieser Transaktion übertragen werden. Wir werden Sie benachrichtigen, bevor Ihre personenbezogenen Daten einer anderen Datenschutzerklärung unterliegen.

Wir verkaufen Ihre personenbezogenen Daten nicht an Dritte. Wir geben Ihre personenbezogenen Daten nicht für Werbezwecke Dritter weiter.

## Datenspeicherung

- **Serverdaten**: Profilfarben, Beitrittsdatum und Beta-Status werden gespeichert, solange Ihr Bluesky-Konto aktiv ist und Sie mit Orbyt interagiert haben. Wir löschen oder anonymisieren diese Daten innerhalb von 90 Tagen, nachdem Sie die Kontoentfernung beantragt haben oder wir die Benachrichtigung erhalten, dass Ihr Konto gelöscht wurde.
- **Lokale Daten**: Daten auf Ihrem Gerät bleiben erhalten, bis Sie den App-Cache leeren, die App löschen oder Ihr Konto entfernen.
- **Wiedergabeverlauf**: Wird nach 30 Tagen automatisch von Ihrem Gerät gelöscht.
- **Serverprotokolle**: Standard-Zugriffsprotokolle (einschließlich IP-Adressen) werden innerhalb von 30 Tagen rotiert und gelöscht, es sei denn, sie werden für die Untersuchung eines Sicherheitsvorfalls oder zur Erfüllung einer rechtlichen Verpflichtung länger aufbewahrt.
- **Fehlerberichte**: Absturz- und Fehlerberichte werden von Sentry standardmäßig 90 Tage lang aufbewahrt.

## Datenlöschung

Sie können Ihre Daten auf folgende Weise löschen:

- **Lokale Daten**: Verwenden Sie „Cache leeren" in den App-Einstellungen oder löschen Sie die App und installieren Sie sie neu
- **Kontoentfernung**: Verwenden Sie „Konto entfernen" in den App-Einstellungen, um alle lokalen Kontodaten zu löschen
- **Serverdaten**: [Kontaktieren Sie uns](/contact), um die Löschung Ihrer serverseitigen Daten zu beantragen – wir werden dies innerhalb von 30 Tagen abschließen

### Einschränkungen bei der Löschung

Aufgrund des dezentralen Charakters des AT-Protokolls können wir keine vollständige Löschung Ihrer Daten bei allen Diensten im Netzwerk garantieren. Wenn Sie Inhalte löschen:

- Werden wir angemessene Anstrengungen unternehmen, um Ihre Inhalte aus Orbyt zu entfernen.
- Werden wir Löschbenachrichtigungen an andere Dienste im AT-Protokoll-Netzwerk senden.
- Wir können unabhängige AT-Protokoll-Dienste nicht zwingen, Ihre Daten zu löschen. Einige Beiträge können auf Diensten außerhalb unserer Kontrolle bestehen bleiben.
- Um die Entfernung von anderen AT-Protokoll-Diensten anzufordern, wenden Sie sich direkt an diese Dienste.

## Internationale Datenübertragungen

Orbyt wird aus den Vereinigten Staaten betrieben. Wenn Sie außerhalb der Vereinigten Staaten auf die App zugreifen, können Ihre Informationen in die Vereinigten Staaten oder andere Länder übertragen und dort verarbeitet werden, in denen unsere Dienstleister tätig sind. Soweit nach anwendbarem Recht erforderlich (z.B. der DSGVO) stützen wir uns auf geeignete Übertragungsmechanismen wie Standardvertragsklauseln, um grenzüberschreitende Datenübertragungen zu schützen.

## Sicherheit

Wir verwenden angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Informationen:

- OAuth-Token werden im sicheren Speicher Ihres Geräts gespeichert (Keychain auf iOS, Keystore auf Android)
- Unsere API verwendet HTTPS-Verschlüsselung für alle Kommunikationen
- Wir speichern Ihr Bluesky-Passwort nicht

Keine Übertragungsmethode über das Internet oder elektronische Speicherung ist 100% sicher. Wir können absolute Sicherheit nicht garantieren, werden Sie aber im Falle einer Datenpanne entsprechend den geltenden Gesetzen benachrichtigen.

## Datenschutz für Kinder

Orbyt richtet sich nicht an Kinder unter 13 Jahren (oder dem geltenden Mindestalter in Ihrem Land). Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn wir feststellen, dass wir solche Daten erhoben haben, werden wir Maßnahmen ergreifen, um diese umgehend zu löschen. Wenn Sie glauben, dass wir Informationen von einem Kind unter 13 Jahren erhoben haben, [kontaktieren Sie uns](/contact) bitte.

## Ihre Rechte

Je nach Ihrem Standort können Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten haben:

- **Auskunft**: Anforderung einer Kopie der personenbezogenen Daten, die wir über Sie gespeichert haben
- **Berichtigung**: Anforderung der Korrektur ungenauer oder unvollständiger Informationen
- **Löschung**: Anforderung der Löschung Ihrer personenbezogenen Daten (vorbehaltlich gesetzlicher Aufbewahrungspflichten)
- **Datenportabilität**: Erhalt Ihrer Daten in einem strukturierten, maschinenlesbaren Format
- **Widerspruch**: Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen
- **Einschränkung**: Anforderung der Einschränkung der Verarbeitung Ihrer Daten unter bestimmten Umständen
- **Einwilligung widerrufen**: Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit ohne Auswirkung auf die bisherige Verarbeitung widerrufen

Um diese Rechte auszuüben, [kontaktieren Sie uns](/contact). Wir werden innerhalb der nach anwendbarem Recht vorgeschriebenen Frist antworten (in der Regel 30 Tage). Wenn Sie sich im EWR, im Vereinigten Königreich oder in der Schweiz befinden, haben Sie auch das Recht, eine Beschwerde bei Ihrer lokalen Datenschutzbehörde einzureichen.

## Änderungen an dieser Erklärung

Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen durch die App oder durch Aktualisierung des Datums „Zuletzt aktualisiert" oben auf dieser Seite informieren. Ihre fortgesetzte Nutzung von Orbyt nach Änderungen gilt als Zustimmung zur aktualisierten Erklärung.

## Kontaktieren Sie uns

Wenn Sie Fragen oder Anfragen zu dieser Datenschutzerklärung haben, besuchen Sie unsere [Kontaktseite](/contact). Für Anfragen betroffener Personen geben Sie bitte „Datenschutzanfrage" in Ihrer Nachricht an, damit wir Ihre Anfrage priorisieren können.
