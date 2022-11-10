
function searchBar(){

    return(`
    <div class="position-relative">
        <div class="col-11">
        <input type="text" class="form-control mb-2 rounded-pill  ps-5 mt-1"  placeholder="Search Tuiter">
        </div>
        <i class="fa-solid fa-magnifying-glass position-absolute top-50 translate-middle ps-5"></i>
        <i class="fa-solid fa-gear position-absolute top-50 end-0 translate-middle fa-2x text-primary wd-gear"></i>
        </div>
    
    `)


}

export default searchBar;