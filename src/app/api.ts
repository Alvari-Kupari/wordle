import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { map, tap } from "rxjs";

interface WordleResponse {
    id: number
    solution: string
}
@Service()
export class WordleAPIService {
    private DATE_NOW = new Date().toISOString().substring(0, 10)
    private API_URL = `/svc/wordle/v2/${this.DATE_NOW}.json`
    private httpService = inject(HttpClient)

    getWord() {
        return this.httpService.get<WordleResponse>(this.API_URL).pipe(
            map(response => response.solution)
        ).pipe(
            tap(res => console.log(`Solution: ` + res))
        )
    }
}