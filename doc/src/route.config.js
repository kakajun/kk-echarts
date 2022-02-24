import navConfig from './doc.config'

const loadDocs = function (path, routerName) {
    if (routerName === 'plugins') {
        return r => require.ensure([], () =>
            r(require(`./docs${path}.md`)),
            'plugins');
    } else if (routerName === 'form') {
        return r => require.ensure([], () =>
            r(require(`./docs${path}.md`)),
            'form');
    } else if (routerName === 'crud') {
        return r => require.ensure([], () =>
            r(require(`./docs${path}.md`)),
            'crud');
    } else if (routerName === 'data') {
        return r => require.ensure([], () =>
            r(require(`./docs${path}.md`)),
            'data');
    } else if (routerName === 'echart') {
        return r => require.ensure([], () =>
            r(require(`./docs${path}.md`)),
            'echart');
    } else {
        return r => require.ensure([], () =>
            r(require(`./docs${path}.md`)),
            'docs');
    }

};
const load = function (name, path) {
    if (path) {
        return r => require.ensure([], () =>
            r(require(`./${path}/${name}.vue`)),
            "roles")
    }
    return r => require.ensure([], () =>
        r(require(`./views/${name}.vue`)),
        "roles")
}

const registerRoute = (navConfig) => {
    const route = []
    let navs = navConfig
    route.push({
        path: '/doc',
        redirect: '/doc/getting-started',
        component: load('Doc'),
        children: []
    })
    navs.forEach(column => {
        column.list.forEach(nav => {
            if (nav.href) return
            if (nav.groups) {
                nav.groups.forEach(group => {
                    group.list.forEach(item => {
                        addRoute(item, nav.routerName)
                    })
                })
            } else if (nav.children) {
                nav.children.forEach(item => {
                    addRoute(item, nav.routerName)
                })
            } else {
                addRoute(nav, nav.routerName)
            }
        })
    })

    function addRoute(page, routerName) {
        if (routerName) {
            page.path = `/${routerName}${page.path}`
        }
        const component = loadDocs(page.path, routerName);
        let child = {
            path: page.path.slice(1),
            meta: {
                auth: page.auth,
                code: page.code,
                title: page.title || page.name,
                description: page.description
            },
            name: page.title || page.name,
            component: component.default || component
        }

        route[0].children.push(child)
    }
    return route
}

let route = registerRoute(navConfig)



export default route