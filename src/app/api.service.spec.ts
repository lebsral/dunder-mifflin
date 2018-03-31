import { ApiService } from "./api.service";

describe("ApiService", () => { 
    let service: ApiService;

    beforeEach(() => {
        service = new ApiService();
    });

    it("works", () => {
        expect(1).toEqual(2);
    });

});
