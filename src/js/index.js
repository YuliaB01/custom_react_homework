const app = CustomReact.createElement(
    'div',
    { style: { backgroundColor: '#ff9000' }, className: 'contentWrapper' },
    [
        CustomReact.createElement('h1', undefined, 'Hello world!'),
        CustomReact.createElement('br'),
        'This is just a text node',
        CustomReact.createElement('div', { textContent: 'Text content' }),
        CustomReact.createElement(
            'div',
            {className: 'imageWrapper'},
            CustomReact.createElement('img', { id: 'image', src: 'http://placehold.it/200x200' })
        )
    ]
);
CustomReact.render(app, document.getElementById('root'));