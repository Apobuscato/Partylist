document.addEventListener('DOMContentLoaded', function () {
    var ballotNav = document.getElementById('ballot-nav');
    var panelsContainer = document.getElementById('panels-container');

    function pad2(n) {
        return String(n).padStart(2, '0');
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str == null ? '' : String(str);
        return div.innerHTML;
    }

    // ---- Bumuo ng ticket buttons at panels galing sa PARTYLISTS (data.js) ----
    PARTYLISTS.forEach(function (p, i) {
        var targetId = 'party-' + p.number;

        // Ticket button
        var ticket = document.createElement('button');
        ticket.type = 'button';
        ticket.className = 'ticket' + (i === 0 ? ' is-active' : '');
        ticket.dataset.target = targetId;
        ticket.style.setProperty('--party-color', p.color);
        ticket.innerHTML =
            '<span class="ticket-number">' + pad2(p.number) + '</span>' +
            '<span class="ticket-text">' +
                '<span class="ticket-name">' + escapeHtml(p.name) + '</span>' +
                '<span class="ticket-count">' + p.members.length + ' kandidato</span>' +
            '</span>';
        ballotNav.appendChild(ticket);

        // Panel
        var panel = document.createElement('article');
        panel.id = targetId;
        panel.className = 'panel' + (i === 0 ? ' is-visible' : '');
        panel.style.setProperty('--party-color', p.color);

        var membersHtml = p.members.map(function (m) {
            var photoInner = m.image
                ? '<img src="' + escapeHtml(m.image) + '" alt="Larawan ni ' + escapeHtml(m.name) + '">'
                : '<span class="member-initial">' + escapeHtml((m.name || '?').charAt(0)) + '</span>';

            var achievementsHtml = (m.achievements || [])
                .map(function (a) { return '<li>' + escapeHtml(a) + '</li>'; })
                .join('');

            return (
                '<button type="button" class="member-card" aria-label="I-flip para makita ang detalye ni ' + escapeHtml(m.name) + '">' +
                    '<div class="member-card-inner">' +
                        '<div class="member-face member-face--front">' +
                            photoInner +
                            '<div class="member-face-caption">' +
                                '<span class="member-name-overlay">' + escapeHtml(m.name) + '</span>' +
                                '<span class="flip-hint">I-click para sa detalye &rarr;</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="member-face member-face--back">' +
                            '<h3>' + escapeHtml(m.name) + '</h3>' +
                            '<p class="member-position">' + escapeHtml(m.position) + '</p>' +
                            '<ul class="achievements">' + achievementsHtml + '</ul>' +
                            '<span class="flip-hint flip-hint--back">&larr; Bumalik sa larawan</span>' +
                        '</div>' +
                    '</div>' +
                '</button>'
            );
        }).join('');

        panel.innerHTML =
            '<div class="panel-head">' +
                '<span class="panel-badge">' + pad2(p.number) + '</span>' +
                '<div>' +
                    '<h2>' + escapeHtml(p.name) + '</h2>' +
                    '<p class="panel-slogan">&ldquo;' + escapeHtml(p.slogan) + '&rdquo;</p>' +
                '</div>' +
            '</div>' +
            '<div class="members-grid">' + membersHtml + '</div>';

        panelsContainer.appendChild(panel);
    });

    // ---- Pagpalit ng panel kapag pinindot ang ticket ----
    var tickets = document.querySelectorAll('.ticket');
    var panels = document.querySelectorAll('.panel');

    tickets.forEach(function (ticket) {
        ticket.addEventListener('click', function () {
            var targetId = ticket.getAttribute('data-target');

            tickets.forEach(function (t) { t.classList.remove('is-active'); });
            ticket.classList.add('is-active');

            panels.forEach(function (panel) {
                panel.classList.toggle('is-visible', panel.id === targetId);
            });

            var target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // ---- I-flip ang member card kapag na-click (larawan <-> detalye) ----
    var memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(function (card) {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });
});
