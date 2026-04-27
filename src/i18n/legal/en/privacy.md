This Privacy Policy describes how Orbyt ("we", "us", "our") collects, uses, and shares information when you use our mobile application ("Orbyt" or "the App"). We are the data controller for personal data we collect directly through the App.

**AT Protocol notice:** Orbyt is a third-party client that connects to the Bluesky network via the AT Protocol. When you post or interact on Orbyt, that activity occurs on the decentralized AT Protocol network. Please also review [Bluesky's Privacy Policy](https://bsky.social/about/support/privacy-policy) to understand how your data is handled on their network.

## The Short Version

- We collect only what we need to run the app — your Bluesky profile info, a few server-side preferences, and standard network logs.
- We do not sell your personal information.
- We do not use your data to train AI or machine-learning models.
- We do not use third-party advertising SDKs. We use Sentry for crash and error monitoring to improve app stability.
- Most content you post is public by design on the AT Protocol — treat it that way.
- You can request access, correction, deletion, or a copy of your data at any time by [contacting us](/contact).

## Information We Collect

### Information from Bluesky

When you sign in to Orbyt with your Bluesky account, we access the following from your Bluesky profile:

- **DID (Decentralized Identifier)**: Your unique identifier on the AT Protocol
- **Handle**: Your username (e.g., @username.bsky.social)
- **Display Name**: Your profile display name
- **Avatar**: Your profile picture

We use Bluesky's OAuth system for authentication. Orbyt does not store your Bluesky password.

### Information Stored on Our Servers

We store a minimal amount of data on our servers to power Orbyt-specific features:

- **Profile Colors**: Custom text and background colors you set in the app
- **Join Date**: The date you first used Orbyt
- **Beta Status**: Whether you are an early Orbyt user

This data is indexed from your `com.getorbyt.profile` record on the AT Protocol and is intentionally minimal.

### Information Stored Locally on Your Device

The following is stored only on your device and never sent to our servers:

- **Account Information**: Your saved Bluesky accounts for quick switching
- **OAuth Tokens**: Secure authentication tokens (stored in device secure storage)
- **Subscribed Channels**: Feeds and channels you've subscribed to
- **Watch History**: Videos you've watched (used to filter your "Your Mix" feed, processed entirely on-device)
- **App Preferences**: Your settings and UI preferences

### Information Shared with the AT Protocol Network

The AT Protocol is a decentralized social networking protocol where most user activity is public by design. When you use Orbyt, the following is shared with and stored on the AT Protocol network (including Bluesky and other third-party services):

- **Public Content**: Posts, profile information, display name, avatar, bio, likes, follows, blocks, and other social interactions are publicly visible to anyone on the AT Protocol network.
- **Orbyt Profile Data**: Your profile colors and subscribed channels are stored in your `com.getorbyt.profile` record on the AT Protocol.

This data is governed by the policies of the AT Protocol network and its operators, including Bluesky Social, PBC, not solely by Orbyt.

### Automatically Collected Information

When you use Orbyt, we may automatically collect:

- **Device Information**: Device type, operating system, and app version
- **IP Address**: Collected through standard network requests to our API; not retained beyond normal server log rotation

### Error Monitoring

The Orbyt app uses **Sentry**, an error-monitoring service, to detect and diagnose crashes and bugs. When an error occurs, Sentry may collect:

- **Error details**: Stack traces and error messages
- **Device information**: Device type, OS version, and app version
- **Breadcrumbs**: A limited log of recent app actions leading up to the error

This data is used solely to identify and fix bugs — not for advertising or behavioral profiling. It is processed by Sentry, Inc. under their [Privacy Policy](https://sentry.io/privacy/).

### Website Analytics

Our website (getorbyt.com) uses **Cloudflare Web Analytics**, a privacy-preserving analytics service that:

- Does not use cookies
- Does not track individual users across sites
- Does not collect personal information
- Collects only aggregate, anonymized data about page views and performance

Learn more about Cloudflare's privacy practices at [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/).

**The Orbyt mobile app does not include any third-party advertising SDKs. We use Sentry only for crash and error monitoring.**

## How We Use Your Information

We process your information to:

- Provide and operate the Orbyt app (*contract performance*)
- Enable sign-in with your Bluesky account (*contract performance*)
- Display your profile colors and customizations (*contract performance*)
- Show personalized feed content based on your subscriptions (*contract performance*)
- Filter your "Your Mix" feed based on watch history, processed locally on your device (*contract performance*)
- Identify beta users for early-access features (*legitimate interest*)
- Detect and fix crashes and errors via Sentry (*legitimate interest*)
- Respond to support requests (*legitimate interest*)
- Comply with applicable law and protect Orbyt and users from harm (*legal obligation / legitimate interest*)

## How We Share Your Information

- **AT Protocol Network**: Your public content is shared with the decentralized AT Protocol network (including Bluesky and third-party apps) as a necessary part of how the protocol works.
- **Service Providers**: We use Cloudflare for hosting and content delivery, and Sentry for crash and error monitoring. These providers process data on our behalf under their respective privacy policies and data processing agreements.
- **Legal Requirements**: We may disclose information when required by law, court order, or to protect the rights, safety, or security of Orbyt, our users, or the public. Where legally permitted, we will attempt to notify you before disclosing.
- **Business Transfers**: If Orbyt is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction. We will provide notice before your personal data becomes subject to a different privacy policy.

We do not sell your personal information to third parties. We do not share your personal information for third-party advertising purposes.

## Data Retention

- **Server Data**: Profile colors, join date, and beta status are retained for as long as your Bluesky account is active and you have interacted with Orbyt. We delete or anonymize this data within 90 days after you request account removal or we receive notice your account has been deleted.
- **Local Data**: Data on your device persists until you clear the app cache, delete the app, or remove your account.
- **Watch History**: Automatically purged from your device after 30 days.
- **Server Logs**: Standard access logs (including IP addresses) are rotated and deleted within 30 days unless retained longer to investigate a security incident or legal obligation.
- **Error Reports**: Crash and error reports are retained by Sentry for 90 days by default.

## Data Deletion

You can delete your data in the following ways:

- **Local Data**: Use "Clear Cache" in app settings, or delete and reinstall the app
- **Account Removal**: Use "Remove Account" in app settings to clear all local account data
- **Server Data**: [Contact us](/contact) to request deletion of your server-side data — we will complete this within 30 days

### Limitations on Deletion

Due to the decentralized nature of the AT Protocol, we cannot guarantee complete deletion of your data across every service on the network. When you delete content:

- We will make reasonable efforts to remove your content from Orbyt.
- We will send deletion notifications to other services on the AT Protocol network.
- We cannot compel independent AT Protocol services to delete your data. Some posts may persist on services outside our control.
- To request removal from other AT Protocol services, contact those services directly.

## International Data Transfers

Orbyt is operated from the United States. If you access the App from outside the United States, your information may be transferred to and processed in the United States or other countries where our service providers operate. Where required by applicable law (e.g., the GDPR), we rely on appropriate transfer mechanisms such as Standard Contractual Clauses to safeguard cross-border data transfers.

## Security

We use reasonable technical and organizational measures to protect your information:

- OAuth tokens are stored in your device's secure storage (Keychain on iOS, Keystore on Android)
- Our API uses HTTPS encryption for all communications
- We do not store your Bluesky password

No method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we will notify you of a data breach as required by applicable law.

## Children's Privacy

Orbyt is not directed to children under 13 years of age (or the applicable minimum age in your country). We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will take steps to delete it promptly. If you believe we have collected information from a child under 13, please [contact us](/contact).

## Your Rights

Depending on your location, you may have the following rights regarding your personal information:

- **Access**: Request a copy of the personal data we hold about you
- **Correction**: Request correction of inaccurate or incomplete information
- **Deletion**: Request deletion of your personal data (subject to legal retention obligations)
- **Portability**: Receive your data in a structured, machine-readable format
- **Objection**: Object to processing based on legitimate interests
- **Restriction**: Request that we restrict processing of your data in certain circumstances
- **Withdraw Consent**: Where processing is based on consent, withdraw it at any time without affecting prior processing

To exercise any of these rights, [contact us](/contact). We will respond within the timeframe required by applicable law (generally 30 days). If you are located in the EEA, UK, or Switzerland, you also have the right to lodge a complaint with your local data protection authority.

## Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of material changes through the app or by updating the "Last Updated" date at the top of this page. Your continued use of Orbyt after any changes constitutes acceptance of the updated policy.

## Contact Us

If you have questions or requests regarding this Privacy Policy, visit our [contact page](/contact). For data subject access requests (DSARs), please include "Privacy Request" in your message so we can prioritize your inquiry.
