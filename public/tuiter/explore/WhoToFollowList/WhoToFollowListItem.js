

function WhoToFollowListItem (who) {

    return(`
              <div class="list-group-item">
              <div class="row ">
                <div class="col-3">
                    <img src="${who.avatarIcon}" class="rounded-circle" width="80%">
                </div>
                <div class="col-6 position-relative">
                    <div class="pt-1">
                    <div class="fw-bold">
                        ${who.userName}&nbsp;<i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                        ${who.handle}
                    </div>
                    </div>
                </div>
                <div class="col-3 position-relative">
                    <button type="button" class="btn btn-primary w-100 rounded-pill mt-1 position-absolute start-50 top-50 translate-middle ">Follow</button>
                </div>
            </div>
            </div>
    `)
}



                 








export default WhoToFollowListItem;