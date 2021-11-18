let local = 'http://127.0.0.1:5000'
let live = 'elite-api.onrender.com'

export let base = process.env.NODE_ENV === 'development' ? local : live 

export function send({ method, path, data, auth, fallback }) {
	const opts = { method, headers: {} }

	if (auth) {
		if (auth.password) {
			// opts.headers['auth'] = JSON.stringify(auth)
			opts.headers['auth'] = btoa(`${auth.username || ''}:${auth.password}`)
		} else {
			opts.headers['auth'] = auth
		}
	}

	if (data) {
		opts.headers['Content-Type'] = 'application/json'
		opts.body = JSON.stringify(data);
	}

	try {
		return fetch(`${base}/${path}`, opts)
			.then(async (r) => {
			return {
				status: r.status,
				text: await r.text()
			}
		})
		.then((res)=>{
			try {
				let json = JSON.parse(res.text)
				if(json.error && !json.status){
					json.status = res.status
				}
				return json
			} catch (err) {
				return res.text
			}
		}).catch((err)=>{
			return fallback || {}
		})
	} catch {
		return fallback || {}
	}
}