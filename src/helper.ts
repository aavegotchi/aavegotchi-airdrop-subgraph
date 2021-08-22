import { BigInt } from "@graphprotocol/graph-ts";
import { Airdrop } from "../generated/schema";

export function getOrCreateAirdrop(blocknumber: BigInt): Airdrop {
    let airdrop = Airdrop.load(blocknumber.toString());
    if(airdrop === null) {
        airdrop = new Airdrop(blocknumber.toString());
        airdrop.save();
    }
    
    return airdrop as Airdrop;
}