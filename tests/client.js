'use strict';

let test = (title, callback) => {
    it(title, () => {
        callback(Mock()[title]);
    });
};

describe('find', () => {
    test('find (empty)', mock => {
        expect(mock.length)
            .to.equal(0);
    });

    test('find (npm feature)', mock => {
        expect(mock.length, 'length')
            .to.equal(1);

        expect('config' in mock[0], 'config')
            .to.equal(true);

        expect(mock[0].config.name, 'name')
            .to.equal('Promise');

        expect(mock[0].config.dependencies[0], 'dependencies')
            .to.equal('setImmediate');

        expect('source' in mock[0], 'source')
            .to.equal(true);

        expect(/Promise/.test(mock[0].source), 'source.length')
            .to.equal(true);

        expect(/addFromSetImmediateArguments/.test(mock[0].source), 'included feature')
            .to.equal(true);
    });

    test('find (local feature)', mock => {
        expect(mock.length, 'length')
            .to.equal(1);

        expect('config' in mock[0], 'config')
            .to.equal(true);

        expect(mock[0].config.name, 'name')
            .to.equal('URL');

        expect(mock[0].config.dependencies.length, 'dependencies')
            .to.equal(0);

        expect('source' in mock[0], 'source')
            .to.equal(true);

        expect(/URL/.test(mock[0].source), 'source.length')
            .to.equal(true);
    });

    test('find (several features)', mock => {
        expect(mock.length > 1, 'length')
            .to.equal(true);

        ['Promise', 'EventSource'].forEach((name, index, list) => {
            expect(mock[index], 'config/source')
                .to.have.all.keys(['config', 'source']);

            expect(new RegExp(list.join('|')).test(mock[index].source), 'source.length')
                .to.equal(true);
        });
    });

    test('find (npm + local)', mock => {
        expect(mock.length > 1, 'length')
            .to.equal(true);

        ['Promise', 'URL'].forEach((name, index, list) => {
            expect(mock[index], 'config/source')
                .to.have.all.keys(['config', 'source']);

            expect(new RegExp(list.join('|')).test(mock[index].source), 'source.length')
                .to.equal(true);
        });
    });

    test('find (option.exclude)', mock => {
        expect(mock.length, 'length')
            .to.equal(1);

        expect('config' in mock[0], 'config')
            .to.equal(true);

        expect(mock[0].config.name, 'name')
            .to.equal('Promise');

        expect('source' in mock[0], 'source')
            .to.equal(true);

        expect(/Promise/.test(mock[0].source), 'source.length')
            .to.equal(true);

        expect(!/addFromSetImmediateArguments/.test(mock[0].source), 'excluded feature')
            .to.equal(true);
    });

    test('find (option.catalog)', mock => {
        expect(mock.length, 'length')
            .to.equal(1);

        expect('config' in mock[0], 'config')
            .to.equal(true);

        expect(mock[0].config.name, 'name')
            .to.equal('Promise');

        expect(mock[0].config.dependencies[0], 'dependencies')
            .to.equal('setImmediate');

        expect('source' in mock[0], 'source')
            .to.equal(true);

        expect(/Promise/.test(mock[0].source), 'source.length')
            .to.equal(true);
    });

    test('find (option.verbose)', mock => {
        expect(mock.length, 'length')
            .to.equal(1);

        expect('config' in mock[0], 'config')
            .to.equal(true);

        expect(mock[0].config.name, 'name')
            .to.equal('Promise');

        expect(mock[0].config.dependencies[0], 'dependencies')
            .to.equal('setImmediate');

        expect('source' in mock[0], 'source')
            .to.equal(true);

        expect(/Promise/.test(mock[0].source), 'source.length')
            .to.equal(true);
    });
});
