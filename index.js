const os = require('os')

let hostname = os.hostname()

if (process.platform === 'win32') {
    // Get the primary DNS suffix (domain name) for the computer under Windows 10.
    const domain = require('child_process').execSync('powershell -Command [System.Net.NetworkInformation.IPGlobalProperties]::GetIPGlobalProperties().DomainName').toString().replace(/\r\n/, '')
    
    if (domain === '') {
        // The primary DNS suffix has not been set. We will fall back to returning the result from os.hostname()
        // but let’s also warn the person that this is probably not what they expect and tell them how they can
        // fix it by setting the primary DNS suffix.
        console.log('\n[Windows hostname warning] Your primary DNS suffix is not set so we cannot calculate your hostname (full computer name). We are falling back to your computer name as retuned by os.hostname(). The app you’re running will most likely not work properly. To set your primary DNS suffix on Windows 10, go to Control Panel → System And Security → System → Change Settings link (next to Computer name) → [Change…] Button → [More…] Button → enter your domain name under Primary DNS suffix of this computer.\n')
    } else {
        // Calculate the full computer name under Windows 10 and return it.
        // This is what we take as being equivalent to the hostname on Linux and macOS.
        hostname = `${hostname}.${domain}`
    }
}

module.exports = hostname
