let local = 'http://127.0.0.1:5000'
let live = 'elite-api.onrender.com'

export let base = live

export function send({ method, path, data, auth, fallback }) {
	const opts = { method, headers: {} }

	if (auth) {
		if (auth.username) {
			opts.headers['auth'] = Buffer.from(`${auth.username}:${auth.password || ''}`).toString('base64')
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

// export function get(path, auth) {
// 	return send({ method: 'GET', path, auth });
// }

// export function del(path, auth) {
// 	return send({ method: 'DELETE', path, auth });
// }

// export function post(path, data, auth) {
// 	return send({ method: 'POST', path, data, auth });
// }

// export function put(path, data, auth) {
// 	return send({ method: 'PUT', path, data, auth });
// }