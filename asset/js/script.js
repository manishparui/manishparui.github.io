let projects = {
    artiner: {
        title: 'Artiner',
        description: `
            Artiner is a platform for all the artist to display, promote and sale their art works to their art lover.
            <br><br>
            I'm currently associated with Artiner product development team as Technical Lead, as a lead developer my primary role is to deliver productive output by translating business requirement to development.
            <br><br>
            While we were in testing phase we realised that artwork can only be sold in original copy and multiple user can accidentally hit checkout at same time, to solve this issue we develop in house product search and checkout assistance algorithm, thanks to my development team.
            <br><br>
            After we successfully lunch this product to market we face major challenges to serve all of our valuable customer from a single resource (Lightsail), as a solution I redesigned our product infrastructure wise (mostly AWS way) to serve computational task from load balancer instead of directly from EC2, also moved static content to S3 and database to RDS, currently both S3 and RDS are being served from Indian region only, but when we will expand our product to different country we will introduce geographical load lancer as well.
        `,
        embed: {
            url: 'https://artiner.com/'
        },
        link: {
            title: 'Visit Artiner',
            url: 'https://artiner.com/'
        }
    }
}

$('#projectModal').on('show.bs.modal', (event) => {
    let button = $(event.relatedTarget)
    let project = button.data('project')
    var modal = $('#projectModal')
    modal.find('.project-title').text(projects[project].title)
    modal.find('.project-embed').attr('src', projects[project].embed.url)
    modal.find('.project-description').html(projects[project].description)
    modal.find('.project-link').attr('href', projects[project].link.url)
    modal.find('.project-link-title').text(projects[project].link.title)
})