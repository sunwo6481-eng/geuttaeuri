import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const email = 'radius-chat@naver.com';
const locales = {
  en: {
    name: 'Us Back Then', privacy: 'Privacy Policy', terms: 'Terms of Service', contact: 'Support', deletion: 'Account and Data Deletion', home: 'Home',
    intro: 'Reconnect through shared schools, clubs, places and memories.',
    privacyIntro: 'Us Back Then respects and protects your personal information. Exact locations are not shown to other users. Location sharing begins only when you choose to turn it on and remains on until you turn it off.',
    privacySections: [
      ['1. Personal information we collect', ['Email address, nickname and user ID.', 'Approximate location information.', 'Optional profile details you enter, such as schools, enrollment years, military units, clubs and their schools or organizations, workplace area, home area and hometown.', 'Chat requests, messages, blocking and reporting information.', 'Strawberry reservation and usage records.', 'Push notification tokens and your selected app language.', 'Purchase information: the store used (Apple App Store or Google Play), product ID, purchase time, purchase environment and quantity credited.', 'One-way hashes of transaction or order identifiers for purchase verification and duplicate-credit prevention.']],
      ['2. Why we collect personal information', ['Registration and sign-in; discovering nearby users; matching shared profile details such as schools, military units and clubs; chat requests and conversations.', 'Blocking, reporting, safe service operation, and app display and push notifications in your selected language.', 'Reserving, spending and releasing strawberries.', 'Verifying purchases, crediting strawberries, preventing duplicate credits and fraudulent payments, and handling cancellations, refunds and payment enquiries.', 'Investigating service errors and improving service quality.']],
      ['3. Location information', ['We may use location information to help you find people nearby. It is used only when you explicitly choose to share your location in the app.', 'Location sharing is not enabled automatically at registration. You must turn it on yourself. It remains enabled until you turn it off, including when the app is in the background or closed.', 'Your exact location is not disclosed to other users. Only an approximate location with an offset is displayed, for nearby discovery and matching.', 'You may stop sharing your location in the app settings at any time. You will then no longer appear on the map or nearby-user list.']],
      ['4. Manual check-in', ['Us Back Then does not provide automatic check-in. You must explicitly activate location sharing to make yourself visible on the map or nearby-user list.', 'Sharing starts only at your request and remains on until you turn it off in the app. You can stop sharing at any time.']],
      ['5. Retention', ['Personal information is retained while you use the service. When you delete your account, account-related personal information such as your profile, location and chat information is deleted.', 'Minimum purchase-verification information and account-deletion processing records may be retained separately to meet legal retention obligations, prevent duplicate credits or abuse, and handle refunds or disputes. They are retained until those purposes are fulfilled or for the period required by applicable law.', 'Purchase-verification records do not include card or bank account numbers. Transaction and order identifiers are stored as one-way hashes where possible.']],
      ['6. Disclosure to third parties', ['We do not sell personal information or provide it to third parties for advertising performance measurement. Information may be disclosed exceptionally when required by law.']],
      ['7. External services', ['We may use Firebase Authentication, Cloud Firestore, Expo Push Notification, Apple App Store, Google Play and other external services to provide registration, sign-in, data storage, notifications, payment authorization and purchase verification.']],
      ['8. Payment information', ['Apple or Google handles payment authorization and payment-method information. Our server does not directly collect card or bank account numbers. It processes only the minimum transaction information needed to verify purchases and credit strawberries.']],
      ['9. Account deletion, purchases and refunds', ['Deleting your account removes any remaining strawberries; they cannot be transferred to another account.', 'Account deletion does not automatically cancel or refund store payments. If you need a refund, use the refund process of the Apple App Store or Google Play that processed your payment before deleting your account.', 'Minimum purchase-verification records may be retained separately after deletion for duplicate-credit prevention and refund or dispute handling, as described above.']],
      ['10. Your rights', ['You can request deletion of your personal information through the account deletion feature in the app at any time. For access, correction, deletion or restriction-of-processing enquiries, contact the email address below.']],
      ['11. Age requirement', ['The service includes location-based discovery of nearby users and is intended for people aged 18 or older. People under 18 may not use the service.']],
      ['12. Contact', ['Privacy enquiries: ' + email]],
      ['13. Effective date', ['This privacy policy took effect on August 12, 2026. This translated page and the descriptions of optional profiles, app language and strawberry usage records were updated on September 19, 2026.']],
    ],
    termsIntro: 'These terms describe the basic conditions for using Us Back Then.',
    termsSections: [
      ['1. About the service', ['Us Back Then is a location-based social service that connects people with shared memories, such as the same schools, military units or local areas.']],
      ['2. Registration and use', ['You can register using the sign-in methods offered in the app and set up profile information to use the service.']],
      ['3. Your responsibilities', ['Do not harass, harm or threaten others.', 'Do not provide false information or impersonate others.', 'Do not send illegal, obscene, hateful or advertising messages.', 'Do not interfere with the normal operation of the service.']],
      ['4. Blocking and reporting', ['You may block or report unwanted users. Reports may lead to restrictions in accordance with the service policies.']],
      ['5. Location-based features', ['Location information is used only when you explicitly choose to check in or share your location. It is not shared automatically at registration.', 'Location sharing remains active until you turn it off yourself. You can stop it at any time in Settings. There is no automatic check-in.', 'Other users see only an approximate location, not your exact location.']],
      ['6. Account deletion', ['You can delete your account at any time in the app. Account-related personal information, such as profile, location and chat information, is deleted and cannot be recovered. Minimum purchase-verification information and account-deletion processing records may be retained separately under the retention criteria in the Privacy Policy to prevent duplicate credits or abuse and handle refunds or disputes.', 'Remaining strawberries are lost and cannot be transferred. Deletion does not automatically refund store payments. Use the relevant store refund process before deletion if a refund is needed. The retention criteria are described in the Privacy Policy.']],
      ['7. Age requirement', ['Because the service includes location-based discovery of nearby users, it is intended for people aged 18 or older.']],
      ['8. Responsibility', ['Us Back Then does not directly intervene in conversations, meetings or disputes between users. You should use the service with your own judgment and responsibility.']],
      ['9. Changes and interruptions', ['We may change or discontinue all or part of the service to improve quality or for operational or technical reasons.']],
      ['10. Contact', ['Service enquiries: ' + email]],
      ['11. Dates', ['The original terms took effect on June 22, 2026. The registration, location-sharing and account-deletion descriptions on this page were updated on September 19, 2026 to match the app.']],
    ],
    contactSections: [['App', ['Us Back Then']], ['Developer', ['Radius Chat Team']], ['Email', [email]], ['How we can help', ['Bug reports, feature suggestions, account questions, blocking and reporting questions, and other service enquiries.']]],
    deletionSections: [['Delete in the app', ['Open Us Back Then, go to Settings and select Delete account.']], ['Request deletion by email', ['If you cannot use the app or need to make an additional deletion request, contact ' + email + '.']], ['Data deleted', ['Account details, email address, nickname, profile details, location information, and chat and request data.']], ['Purchases and retained records', ['Remaining strawberries are lost and cannot be transferred to another account. Store payments are not automatically refunded. If you need a refund, use the refund process of the Apple App Store or Google Play that processed your payment before deleting your account. Minimum purchase-verification and deletion-processing records may be retained separately under the retention criteria in the Privacy Policy to meet legal retention obligations, prevent duplicate credits or abuse, and handle refunds or disputes.']], ['Processing time', ['Requests received by email are processed within 7 days after identity verification.']]],
  },
  ja: {
    name: 'あの頃', privacy: 'プライバシーポリシー', terms: '利用規約', contact: 'サポート', deletion: 'アカウントとデータの削除', home: 'ホーム',
    intro: '学校、部活・サークル、場所や思い出の共通点から、もう一度つながる。',
    privacyIntro: '「あの頃」は、ユーザーの個人情報を大切に保護します。正確な位置は他のユーザーに公開されません。位置情報の共有はご自身で選択した場合にのみ始まり、ご自身で停止するまで継続します。',
    privacySections: [
      ['1. 収集する個人情報', ['メールアドレス、ニックネーム、ユーザーID。', 'おおよその位置情報。', '学校、入学年、所属部隊、部活・サークルと学校・団体名、勤務先の地域、居住地域、出身地など、ご自身で任意入力したプロフィール情報。', 'チャットリクエスト、メッセージ、ブロックと通報に関する情報。', 'いちごの確保・利用履歴。', 'プッシュ通知トークンと選択したアプリの表示言語。', '購入情報：利用ストア（Apple App StoreまたはGoogle Play）、商品ID、購入日時、購入環境、付与数量。', '購入確認と重複付与防止のための、取引・注文識別子の一方向ハッシュ値。']],
      ['2. 利用目的', ['会員登録とログイン、近くのユーザーの検索、学校・所属部隊・部活など共通プロフィールによるつながりの検索、チャットリクエストとチャットの提供。', 'ブロックと通報への対応、安全なサービス運営、選択した言語でのアプリ表示とプッシュ通知。', 'いちごの確保・消費・確保解除。', '購入確認、いちごの付与、重複付与と不正決済の防止、購入取消・返金・決済に関するお問い合わせへの対応。', '不具合の調査とサービス品質の改善。']],
      ['3. 位置情報の利用', ['近くの人を探す機能のために位置情報を利用する場合があります。アプリ内でご自身が位置情報の共有を選択した場合にのみ利用します。', '会員登録時に位置情報を自動で公開することはありません。共有はご自身で開始し、停止するまで継続します。アプリがバックグラウンドにある場合や終了した場合も、自動では解除されません。', '正確な位置は他のユーザーに公開されません。誤差を加えたおおよその位置のみを表示し、近くのユーザーの検索と共通点によるつながりの検索に使用します。', '設定画面からいつでも共有を停止できます。停止すると、地図や近くのユーザー一覧には表示されなくなります。']],
      ['4. 手動チェックイン', ['自動チェックイン機能はありません。地図や近くのユーザー一覧に表示するには、ご自身で位置情報の共有を開始してください。', '共有はご自身が操作した場合にのみ有効となり、アプリ内で停止するまで続きます。いつでも停止できます。']],
      ['5. 保管期間', ['個人情報はサービスを利用している間、保管されます。退会やアカウント削除時には、プロフィール、位置情報、チャット情報など、アカウントに関する個人情報を削除します。', 'ただし、法令に基づく保存義務、重複付与・不正利用の防止、返金や紛争への対応に必要な最小限の購入確認情報と削除処理記録は、目的が達成されるまで、または法令で定められた期間、分離して保管する場合があります。', '購入確認記録にカード番号や銀行口座番号は含まれません。取引・注文識別子は、可能な場合、一方向ハッシュ値で保管します。']],
      ['6. 第三者への提供', ['個人情報を販売したり、広告効果の測定を目的として第三者に提供したりすることはありません。ただし、法令に基づく要請がある場合は、例外として提供することがあります。']],
      ['7. 外部サービス', ['Firebase Authentication、Cloud Firestore、Expo Push Notification、Apple App Store、Google Playなどの外部サービスを利用する場合があります。会員登録、ログイン、データ保存、通知、決済承認、購入確認などに使用します。']],
      ['8. 決済情報', ['決済の承認と支払手段の情報はAppleまたはGoogleが処理します。当サービスのサーバーはカード番号や銀行口座番号を直接収集せず、購入確認といちごの付与に必要な最小限の取引情報のみを処理します。']],
      ['9. アカウント削除・購入・返金', ['アカウントを削除すると、残っているいちごは失効し、他のアカウントに移すことはできません。', 'アカウントの削除だけでは、ストアの決済が自動で取り消されたり返金されたりしません。返金を希望する場合は、削除前に、決済を処理したApple App StoreまたはGoogle Playの返金手続きを利用してください。', '削除後も、重複付与の防止や返金・紛争への対応に必要な最小限の購入確認記録を、上記の期間に従い分離して保管する場合があります。']],
      ['10. ユーザーの権利', ['アプリ内のアカウント削除機能から、いつでも個人情報の削除を求めることができます。閲覧、訂正、削除、処理停止に関するお問い合わせは、下記メールアドレスにお送りください。']],
      ['11. 年齢制限', ['位置情報を利用した近くのユーザーの検索機能を含むため、18歳以上の方を対象としています。18歳未満の方は利用できません。']],
      ['12. お問い合わせ', ['個人情報に関するお問い合わせ：' + email]],
      ['13. 施行日', ['本ポリシーは2026年8月12日に施行されました。この翻訳ページおよび任意のプロフィール・表示言語・いちごの利用履歴に関する説明は2026年9月19日に更新しました。']],
    ],
    termsIntro: '本規約は、「あの頃」の利用に関する基本事項を定めます。',
    termsSections: [
      ['1. サービスについて', ['「あの頃」は、同じ学校、所属部隊、地域など、共通の思い出を持つ人を位置情報に基づいてつなぐソーシャルサービスです。']],
      ['2. 会員登録と利用', ['アプリで提供するログイン方法を使って登録し、利用のためにプロフィール情報を設定できます。']],
      ['3. ユーザーの義務', ['他の人に不快感、被害、脅威を与える行為を禁止します。', '虚偽の情報の入力や、他人へのなりすましを禁止します。', '違法、わいせつ、憎悪、広告目的のメッセージの送信を禁止します。', 'サービスの正常な運営を妨害する行為を禁止します。']],
      ['4. ブロックと通報', ['望まないユーザーをブロックまたは通報できます。通報があった場合、運営方針に従って利用を制限することがあります。']],
      ['5. 位置情報を利用する機能', ['位置情報は、ご自身でチェックインまたは共有を選択した場合にのみ使用します。会員登録時に自動で公開することはありません。', '共有はご自身で停止するまで続き、設定画面からいつでも停止できます。自動チェックインはありません。', '正確な位置は他のユーザーに公開せず、おおよその位置のみ表示します。']],
      ['6. アカウント削除', ['アプリ内でいつでもアカウントを削除できます。プロフィール、位置情報、チャット情報など、アカウントに関する個人情報は削除され、復元できません。ただし、重複付与・不正利用の防止、返金や紛争への対応などに必要な最小限の購入確認情報と削除処理記録は、プライバシーポリシーの保管基準に従い分離して保管する場合があります。', '残っているいちごは失効し、移行できません。決済が自動で返金されることはありません。返金を希望する場合は削除前にストアの手続きを利用してください。保管基準はプライバシーポリシーに記載しています。']],
      ['7. 年齢制限', ['位置情報による近くのユーザーの検索機能を含むため、18歳以上の方を対象とします。']],
      ['8. 責任について', ['当サービスは、ユーザー間の会話、面会、紛争に直接介入しません。ご自身の判断と責任で利用してください。']],
      ['9. サービスの変更と中断', ['品質改善、運営上の必要、技術的な理由により、サービスの一部または全部を変更・中断することがあります。']],
      ['10. お問い合わせ', ['サービスに関するお問い合わせ：' + email]],
      ['11. 日付', ['原規約は2026年6月22日に施行されました。このページの会員登録、位置情報共有、アカウント削除に関する説明は、アプリに合わせて2026年9月19日に更新しました。']],
    ],
    contactSections: [['アプリ名', ['あの頃']], ['開発者', ['Radius Chat Team']], ['メール', [email]], ['お問い合わせ内容', ['不具合の報告、機能改善の提案、アカウント、ブロックと通報、その他サービスに関するお問い合わせ。']]],
    deletionSections: [['アプリ内で削除', ['「あの頃」の設定画面から「アカウント削除」を選択してください。']], ['メールでの削除依頼', ['アプリを利用できない場合や追加の削除依頼は、' + email + 'までご連絡ください。']], ['削除するデータ', ['アカウント情報、メールアドレス、ニックネーム、プロフィール、位置情報、チャットとリクエストに関するデータ。']], ['購入と保管記録', ['残っているいちごは失効し、別のアカウントには移せません。ストアの決済は自動では返金されません。返金を希望する場合は、削除前に、決済を処理したApple App StoreまたはGoogle Playの返金手続きを利用してください。法令に基づく保存義務、重複付与・不正利用の防止、返金や紛争への対応に必要な最小限の購入確認情報と削除処理記録は、プライバシーポリシーの保管基準に従い分離して保管する場合があります。']], ['処理期間', ['メールで受け付けた依頼は、ご本人の確認後7日以内に処理します。']]],
  },
};
const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const files = ['index.html','privacy.html','terms.html','contact.html','delete-account.html'];
function languageNav(file, lang) {
  return `<nav aria-label="Language"><a lang="ko" href="${lang === 'ko' ? '' : '../'}${file}">한국어</a> · <a lang="ja" href="${lang === 'ko' ? 'ja/' : '../ja/'}${file}">日本語</a> · <a lang="en" href="${lang === 'ko' ? 'en/' : '../en/'}${file}">English</a></nav>`;
}
for (const [lang, copy] of Object.entries(locales)) {
  await mkdir(path.join(root,lang), {recursive:true});
  const types = { 'index.html': ['home',[[copy.name,[copy.intro]]]], 'privacy.html':['privacy',copy.privacySections], 'terms.html':['terms',copy.termsSections], 'contact.html':['contact',copy.contactSections], 'delete-account.html':['deletion',copy.deletionSections] };
  for (const [file,[type,sections]] of Object.entries(types)) {
    const links = Object.entries(types).map(([href,[key]])=>`<a href="${href}">${escape(copy[key])}</a>`).join(' · ');
    const body = sections.map(([heading,paras])=>`<section><h2>${escape(heading)}</h2>${paras.map(p=>`<p>${escape(p)}</p>`).join('')}</section>`).join('\n');
    const intro = type === 'privacy' ? copy.privacyIntro : type === 'terms' ? copy.termsIntro : '';
    const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(copy.name)} — ${escape(copy[type])}</title><style>body{margin:0;background:#081224;color:#fff;font:16px/1.75 system-ui,sans-serif}main{max-width:900px;margin:auto;padding:32px 20px}h1{font-size:clamp(26px,5vw,42px);line-height:1.3}h2{font-size:22px;color:#93c5fd}p{color:#cbd5e1;overflow-wrap:anywhere}section{padding:20px 24px;margin:18px 0;background:#132238;border-radius:18px}a{color:#93c5fd}nav,footer{margin:20px 0}footer{color:#94a3b8}@media(max-width:420px){section{padding:16px}main{padding:20px 14px}}</style></head><body><main>${languageNav(file,lang)}<h1>${escape(copy[type])}</h1><p>${escape(intro)}</p>${body}<p><a href="mailto:${email}">${email}</a></p><nav>${links}</nav><footer>© 2026 ${escape(copy.name)}. All Rights Reserved.</footer></main></body></html>\n`;
    await writeFile(path.join(root,lang,file),html);
  }
}
for(const file of files){
  const target = path.join(root,file);
  let html = await readFile(target,'utf8');
  if(!html.includes('aria-label="Language"')) html=html.replace('<body>', `<body>\n<div style="max-width:900px;margin:auto;padding:16px 20px">${languageNav(file,'ko')}</div>`);
  await writeFile(target,html);
}
console.log('Generated 10 localized pages and linked Korean pages.');
