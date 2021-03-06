import { resolve4, setServers, getServers, LookupAddress, LookupOptions, lookup } from 'dns';
import { GMT } from './index';

export function resolveDNS(
	host: string
): Promise<string[]> {
	return new Promise((resolve, reject) => {
		resolve4(host, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		});
	});
}

export function setCustomDNSServer(dnsServer: string) {
	if(dnsServer) {
		let currentDNSservers = getServers();
		setServers([dnsServer, ...currentDNSservers]);
	}
}

export function lookupDNS(
	host: string,
	opts: LookupOptions
): Promise<string | LookupAddress[]> {

	return new Promise((resolve, reject) => {
		lookup(host, opts, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		});
	});
}

export function isGMT(v: any): v is GMT {
	return v === 'GMT';
}
