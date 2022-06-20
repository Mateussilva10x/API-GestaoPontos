const request = require("supertest");

const app = require("../index");

describe("insert", () => {
  const mockMarkers = {
    id: 1,
    lat: -15.2728,
    lng: -53.5901,
    draggable: true,
    createdAt: "2022-06-20T11:40:43.000Z",
    updatedAt: "2022-06-20T11:40:43.000Z",
  };

  it("GET/markers should return a array and status code 200", async () => {
    jest.setTimeout(10000);
    await request(app)
      .get("/markers")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              lat: expect.any(Number),
              lng: expect.any(Number),
              draggable: expect.any(Boolean),
            }),
          ])
        );
      });
  });

  it("GET/markers/:markerId should return a array and status code 302", async () => {
    jest.setTimeout(10000);
    await request(app)
      .get(`/markers/${mockMarkers.id}`)
      .expect("Content-Type", /json/)
      .expect(302)
      .then((response) => {
        expect(response.body).toEqual(mockMarkers);
      });
  });

  it("GET/markers/:markerId should return status code 404 invalid ID", async () => {
    jest.setTimeout(10000);
    await request(app).get("/markers/invalidId").expect(404);
  });

  it("POST/markers/ should return a status code 201", async () => {
    jest.setTimeout(10000);
    await request(app)
      .post("/markers")
      .send({ lat: -15.2728, lng: -53.5901, draggable: true })
      .expect("Content-type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            lat: expect.any(Number),
            lng: expect.any(Number),
            draggable: expect.any(Boolean),
          })
        );
      });
  });

  it("POST/markers should return a status code 400", async () => {
    jest.setTimeout(10000);
    await request(app)
      .post("/markers/")
      .send({ lat: "-15.2728", lng: -53.5901, draggable: 456498 })
      .expect(400);
  });

  it("PUT/markers/:markerId should return a status code 201 and a array with new params", async () => {
    jest.setTimeout(10000);
    await request(app)
      .post("/markers")
      .send({ lat: -15.2728, lng: -53.5901, draggable: false })
      .expect("Content-type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            lat: expect.any(Number),
            lng: expect.any(Number),
            draggable: expect.any(Boolean),
          })
        );
      });
  });

  it("PUT/markers/:markerId should return a status code 400", async () => {
    jest.setTimeout(10000);
    await request(app).put("/markers/invalidId").expect(400);
  });

  it("DELETE/markers/:markerId should return a status code 200", async () => {
    jest.setTimeout(10000);

    const exampleMarker = await request(app)
      .post("/markers")
      .send({ lat: 12346, lng: 1234 });

    const newId = exampleMarker.body.id;

    await request(app).delete(`/markers/${newId}`).expect(200);
  });

  it("DELETE/markers/:markerId should return a status code 400", async () => {
    jest.setTimeout(10000);
    await request(app).delete("/markers/invalidId").expect(400);
  });

  it("DELETE/markers should return a status code 200", async () => {
    jest.setTimeout(10000);
  });
});
