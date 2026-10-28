import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";

interface WordleResponse {
    id: number
    solution: string
}
@Service()
export class WordleAPIService {
    private DATE_NOW = new Date().toISOString().substring(0, 10)
    private API_URL = `https://www.nytimes.com/svc/wordle/v2/${this.DATE_NOW}.json`
    private httpService = inject(HttpClient)

    getWord() {
        return this.httpService.get<WordleResponse>(this.API_URL)
    }
}