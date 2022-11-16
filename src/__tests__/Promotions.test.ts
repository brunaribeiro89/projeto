import app from "../server"
import request from "supertest"
import supertest from "supertest"
import mongoose from "mongoose"
import ConnectDatabase from "../infrastructure/driver/mongo/connector"

afterEach(() => {
  jest.useRealTimers()
})

beforeAll(async () => {
  await ConnectDatabase()
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoose.connection.close()
})

describe("GET / - a simple api endpoint", () => {
  it("API Request", async () => {
    const result = await request(app).get("/")
    expect(result.text).toContain("Teste Server")
    expect(result.statusCode).toEqual(200)
  })
})

describe("GET / - a promotions api endpoint", () => {
  it("API Request", async () => {
    const resultPromotions = await supertest(app).get("/promotions")
    expect(resultPromotions.body).toBeDefined()
    expect(resultPromotions.statusCode).toEqual(200)
    expect(resultPromotions.body).toBeInstanceOf(Array)
    expect(resultPromotions.body.length).toBeGreaterThan(0)
  })
})

describe("GET / - promotion route findByid", () => {
  describe("given the promotion does not exist", () => {
    it("should return 500", async () => {
      const id = "636509d32b1e88e907e7d4t6"
      const promotionfindbyid = await supertest(app).get(`/promotions/${id}`)
      expect(promotionfindbyid.statusCode).toEqual(400)
      expect(promotionfindbyid.body).toBeInstanceOf(Object)
    })
  })
})

describe("GET / - promotion route findByid", () => {
  describe("given the promotion exist", () => {
    it("should return 200", async () => {
      const id = "636918e24f1191d88fd24205"
      const promotionfindByid = await supertest(app).get(`/promotions/${id}`)
      expect(promotionfindByid.statusCode).toEqual(200)
      expect(promotionfindByid.body).toBeInstanceOf(Object)
    })
  })
})

describe("POST / -  promotions route", () => {
  describe("send the promotion when fields are not completed", () => {
    it("should return 400", async () => {
      const resultPostPromotions = await supertest(app)
        .post(`/promotions`)
        .send({
          name: "promotionPost",
          id_region: "lknm45321",
          exclusive: false,
          start_date: "2022-08-01T13:27:11.977Z",
          end_date: "2022-09-05T13:27:11.977Z",
          enable: true,
          accounts_ids: ["count20", "count21", "count22"],
          items: [
            {
              min_quantity: 500,
              discount_price_percent_product: 70,
              limit: 900,
              limit_type: "QUANTITY",
              skus: [
                {
                  skus: "sku6",
                  fifo_code: "fifo6",
                  product_category: "category6",
                  required: true,
                },
              ],
              free_goods: [
                {
                  sku: "sfg4",
                  quantity: 200,
                },
              ],
              ranges_discounts: [
                {
                  from_min: 40,
                  to_max: 300,
                  discount_price_percent: 20,
                },
              ],
            },
          ],
          createdAt: "2022-11-07T14:53:33.015Z",
          updatedAt: "2022-11-09T16:42:51.434Z",
          __v: 0,
        })
      expect(resultPostPromotions.statusCode).toEqual(400)
      expect(resultPostPromotions.body).toBeDefined()
      expect(resultPostPromotions.body).toBeInstanceOf(Object)
    })
  })
})

describe("POST / -  promotions route", () => {
  describe("send the promotion when id_region exist", () => {
    it("should return 400", async () => {
      const resultPostPromotions = await supertest(app)
        .post(`/promotions`)
        .send({
          name: "promotionPost",
          id_region: "lknm45321",
          promotion_type: "COMBO",
          exclusive: false,
          start_date: "2022-08-01T13:27:11.977Z",
          end_date: "2022-09-05T13:27:11.977Z",
          enable: true,
          accounts_ids: ["count20", "count21", "count22"],
          items: [
            {
              min_quantity: 500,
              discount_price_percent_product: 70,
              limit: 900,
              limit_type: "QUANTITY",
              skus: [
                {
                  skus: "sku6",
                  fifo_code: "fifo6",
                  product_category: "category6",
                  required: true,
                },
              ],
              free_goods: [
                {
                  sku: "sfg4",
                  quantity: 200,
                },
              ],
              ranges_discounts: [
                {
                  from_min: 40,
                  to_max: 300,
                  discount_price_percent: 20,
                },
              ],
            },
          ],
          createdAt: "2022-11-07T14:53:33.015Z",
          updatedAt: "2022-11-09T16:42:51.434Z",
          __v: 0,
        })
      expect(resultPostPromotions.statusCode).toEqual(400)
      expect(resultPostPromotions.body).toBeDefined()
      expect(resultPostPromotions.body).toBeInstanceOf(Object)
    })
  })
})

describe("POST / -  promotions route", () => {
  describe("send the promotion when fields are  completed", () => {
    it("should return 200", async () => {
      const resultPostPromotions = await supertest(app)
        .post(`/promotions`)
        .send({
          name: "promotionsApril",
          id_region: "noy765dcx",
          promotion_type: "COMBO",
          exclusive: false,
          start_date: "2022-08-01T13:27:11.977Z",
          end_date: "2022-09-05T13:27:11.977Z",
          enable: true,
          accounts_ids: ["count20", "count21", "count22"],
          items: [
            {
              min_quantity: 500,
              discount_price_percent_product: 70,
              limit: 900,
              limit_type: "QUANTITY",
              skus: [
                {
                  skus: "sku6",
                  fifo_code: "fifo6",
                  product_category: "category6",
                  required: true,
                },
              ],
              free_goods: [
                {
                  sku: "sfg4",
                  quantity: 200,
                },
              ],
              ranges_discounts: [
                {
                  from_min: 40,
                  to_max: 300,
                  discount_price_percent: 20,
                },
              ],
            },
          ],
          createdAt: "2022-11-07T14:53:33.015Z",
          updatedAt: "2022-11-09T16:42:51.434Z",
          __v: 0,
        })
      expect(resultPostPromotions.statusCode).toEqual(200)
      expect(resultPostPromotions.body).toBeDefined()
      expect(resultPostPromotions.body).toBeInstanceOf(Object)
    })
  })
})

describe("UPDATE / -  promotions route", () => {
  describe("send the promotion byId", () => {
    it("should return 400 id Id is invalid", async () => {
      const id = "636509d32b1e88e907e7d4t6"
      const resultPromotionsIdUndefined = await supertest(app).get(`/promotions/${id}`)
      const { _id } = resultPromotionsIdUndefined.body
      expect(resultPromotionsIdUndefined.statusCode).toEqual(400)
      expect(_id).toBeUndefined()
    })
  })
})

describe("UPDATE / -  promotions route", () => {
  describe("send the promotion byId", () => {
    it("should return 200 if the id exist", async () => {
      const id = "63691bec2d9208aaa6f5f4b1"
      const resultPostPromotions = await supertest(app).get(`/promotions/${id}`)
      const { _id } = resultPostPromotions.body
      const promotionUpdate = await supertest(app)
        .put(`/promotions/${_id}`)
        .send({
          name: "promotionYear",
          id_region: "lknm45321",
          promotion_type: "COMBO",
          exclusive: false,
          start_date: "2022-08-01T13:27:11.977Z",
          end_date: "2022-09-05T13:27:11.977Z",
          enable: true,
          accounts_ids: ["count20", "count21", "count22"],
          items: [
            {
              min_quantity: 500,
              discount_price_percent_product: 70,
              limit: 900,
              limit_type: "QUANTITY",
              skus: [
                {
                  skus: "sku6",
                  fifo_code: "fifo6",
                  product_category: "category6",
                  required: true,
                },
              ],
              free_goods: [
                {
                  sku: "sfg4",
                  quantity: 200,
                },
              ],
              ranges_discounts: [
                {
                  from_min: 40,
                  to_max: 300,
                  discount_price_percent: 20,
                },
              ],
            },
          ],
          createdAt: "2022-11-07T14:53:33.015Z",
          updatedAt: "2022-11-09T16:42:51.434Z",
          __v: 0,
        })
      expect(promotionUpdate.statusCode).toEqual(200)
    })
  })
})

/*describe("DELETE / -  promotions route", () => {
  describe("send the valid Id", () => {
    it("should return 200", async () => {
      const id = "636d206f6af19b6591a51181"
      const resultPostPromotions = await supertest(app).delete(`/promotions/${id}`)
      expect(resultPostPromotions.statusCode).toEqual(200)
      expect(resultPostPromotions.body).toBeInstanceOf(Object)
    })
  })
})*/

describe("DELETE / -  promotions route", () => {
  describe("send the invalid Id", () => {
    it("should return 400", async () => {
      const id = "63691bec2d9208aaa6f5fdc2"
      const resultPostPromotions = await supertest(app).delete(`/promotions/${id}`)
      expect(resultPostPromotions.statusCode).toEqual(400)
    })
  })
})
